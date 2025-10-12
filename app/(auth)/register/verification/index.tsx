import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, Keyboard
} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, useLocalSearchParams, router} from "expo-router";
import {useState} from "react";
import {supabase} from "@/lib/supabase";
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";

const schema = z.object({
    code: z
        .string()
        .min(6, 'Le code doit contenir 6 chiffres')
        .max(6, 'Le code doit contenir 6 chiffres')
        .regex(/^\d{6}$/, 'Le code doit contenir uniquement des chiffres'),
})

type FormValues = z.infer<typeof schema>

export default function VerificationScreen() {
    const params = useLocalSearchParams<{ phone?: string; user_id?: string }>()
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {code: ''},
    })
    const [loading, setLoading] = useState(false)
    const [resending, setResending] = useState(false)

    const verify = async ({code}: FormValues) => {
        try {

            const phone = params.phone as string | undefined
            const user_id = params.user_id as string | undefined
            if (!phone && !user_id) throw new Error('Paramètres manquants')

            // Vérification via Supabase Auth (SMS OTP)
            const {data, error} = await supabase.auth.verifyOtp({
                phone: phone!,
                token: code,
                type: 'sms',
                options: { redirectTo: undefined }
            })
            if (error) throw error

            const user = data.user

            console.log('DATA: ', data)
            console.log('USER: ', user)
            /*if (user) {
                const {} = await supabase
                    .from('users')
                    .insert([
                        { id: user.id,
                            phone_number: user.phone,
                            whatsapp_number: user.phone,
                            full_name: user.user_metadata.full_name},
                    ])
            }*/

            return data
        } catch (e: any) {
            throw e
        }
    }

    const resend = async () => {
        try {
            setResending(true)
            const phone = params.phone as string | undefined
            if (!phone) throw new Error('Paramètres manquants')

            // Tente de renvoyer via Supabase Auth (SMS)
            // Note: supabase-js v2 expose resend API via verifyOtp or auth.resend - ici on utilise resend pour SMS
            // @ts-ignore
            const {error} = await (supabase.auth as any).resend({type: 'sms', phone})
            if (error) throw error

            Alert.alert('OTP', 'Un nouveau code a été envoyé par SMS')
        } catch (e: any) {
            Alert.alert('OTP', e?.message || 'Impossible de renvoyer le code')
        } finally {
            setResending(false)
        }
    }

    const verifyOTPMutaion = useMutation({
        mutationFn: async (code: FormValues) => {
            return await verify(code)
        },
        onSuccess: (data: any) => {
            const user = data.user
            router.push('/(auth)/register/registration-done')
        },
        onError: (error: any) => {
            Alert.alert('Vérification', error?.message || 'Une erreur est survenue')
        }
    })

    const onOTPSubmit = (values: FormValues) => {
        verifyOTPMutaion.mutate(values)
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: "white"}} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
            >
                <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo}/>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
                    </View>

                    <Text style={{fontSize: 12, fontWeight: '500', textAlign: 'center', color: Colors.textColor}}>
                        Entrez le code à 6 chiffres qui vous a été envoyé par SMS.
                    </Text>

                    <View style={styles.form}>
                        <Controller
                            control={control}
                            name={'code'}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    keyboardType={'numeric'}
                                    maxLength={6}
                                    placeholderTextColor="gray"
                                    placeholder={'______'}
                                    style={styles.input}
                                />
                            )}
                        />
                        {errors.code && <Text>{errors.code.message}</Text>}

                        <Text style={{fontSize: 12, fontWeight: '400'}}>Vous n'avez pas reçu de code ?</Text>
                        <TouchableOpacity disabled={resending} onPress={resend} style={{width: 'auto'}}>
                            {resending ? <ActivityIndicator/> :
                                <Text style={{fontSize: 16, fontWeight: '700'}}>RENVOYER</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity disabled={loading} onPress={handleSubmit(onOTPSubmit)} style={styles.loginBtn}>
                            {verifyOTPMutaion.isPending ? <ActivityIndicator/> :
                                <Text style={{fontSize: 18, fontWeight: '700'}}>Vérifier</Text>}
                        </TouchableOpacity>

                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Link href={'/(tabs)'}><Text>Retour à l'acceuil</Text></Link>
                    </View>


                    <View style={{marginTop: 'auto'}}>
                        <Text style={{textAlign: 'center', fontSize: 12, fontWeight: '400'}}>From</Text>
                        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>Artisan Studio</Text>
                    </View>
                </View>
                </Pressable>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: Spacings.containerPadding,
        alignItems: 'center',
        gap: 57
    },
    logoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: Spacings.padding
    },
    logo: {
        resizeMode: "cover",
        height: 87,
        width: 87,
        borderRadius: 100
    },
    form: {
        width: '100%',
        gap: Spacings.padding * 2,
    },
    input: {
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
        width: '51%',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 10,
    },
    loginBtn: {
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
})