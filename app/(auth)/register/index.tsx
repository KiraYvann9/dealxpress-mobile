import {
    View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, Alert, ActivityIndicator,
    Platform, KeyboardAvoidingView, Keyboard
} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, router} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {supabase} from "@/lib/supabase";

const schema = z.object({
    full_name: z.string().min(2, 'Nom trop court'),
    phone_number: z.string().min(6, 'Téléphone invalide'),
    whatsapp_number: z.string().optional(),
    password: z.string().min(6, '6 caractères minimum'),
    confirm_password: z.string().min(6, '6 caractères minimum'),
}).refine((v)=> v.password === v.confirm_password, { path: ['confirm'], message: 'Les mots de passe ne correspondent pas' })

type FormValues = z.infer<typeof schema>



export default function RegisterScreen(){
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { full_name: '', phone_number: '', whatsapp_number: '', password: '', confirm_password: '' }
    })

    const mutation = useMutation({
        mutationFn: async (values: FormValues) => {
            const {full_name, phone_number, whatsapp_number, password} = values;

            // Normalize phone numbers to E.164 (assume CI +225 if missing country code)
            const normalize = (p?: string) => {
                if (!p) return undefined as unknown as string;
                const trimmed = p.trim();
                if (!trimmed) return undefined as unknown as string;
                // Remove spaces and non-digits except leading +
                let t = trimmed.replace(/[^\d+]/g, '');
                if (!t.startsWith('+')) {
                    // Default country code (Côte d'Ivoire) - adjust if needed
                    if (t.startsWith('0')) t = t.substring(0);
                    t = `+225${t}`;
                }
                return t;
            }
            const phoneE164 = normalize(phone_number);
            const whatsappE164 = whatsapp_number ? normalize(whatsapp_number) : undefined;

            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                phone: phoneE164!,
                password,
                options: {
                    data: { full_name, phone_number: phoneE164, whatsapp_number: whatsappE164 }
                }
            })
            if (signUpError) throw signUpError
            const user = signUpData.user
            if (!user) throw new Error('Utilisateur non créé')

            // 2) Supabase enverra un OTP SMS automatiquement pour vérifier le numéro.
            // Dans certains projets, l'OTP n'est envoyé que si le numéro est au format E.164.
            // Par sécurité, on tente de renvoyer l'OTP si nécessaire.
            try {
                // @ts-ignore - resend is available at runtime in supabase-js v2
                await (supabase.auth as any).resend({ type: 'sms', phone: phoneE164 });
            } catch (e) {
                // ignore, OTP might have been sent already
            }

            return { phone: user.phone, user_id: user.id }
        },
        onSuccess: ({phone, user_id}) => {

            router.push({ pathname: '/(auth)/register/verification', params: { phone, user_id } })
        },
        onError: (error: any) => {
            Alert.alert('Erreur inscription', error?.message || 'Une erreur est survenue')
        }
    })

    const onSubmit = (values: FormValues) => mutation.mutate(values)

    return(
        <ScrollView style={{flex:1, backgroundColor: '#fff'}} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
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

                    <View style={styles.form}>
                        <Controller control={control} name={'full_name'} render={({field:{onChange, onBlur, value}})=> (
                            <TextInput placeholderTextColor="gray" placeholder={'Prénoms ou Nom de la boutique *'} style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} />
                        )}/>
                        {errors.full_name && <Text>{errors.full_name.message}</Text>}


                        <Controller control={control} name={'phone_number'} render={({field:{onChange, onBlur, value}})=> (
                            <TextInput placeholderTextColor="gray" placeholder={'N° de téléphone *'} style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} keyboardType={'phone-pad'} />
                        )}/>
                        {errors.phone_number && <Text>{errors.phone_number.message}</Text>}

                        <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>Ce numéro pourra être utilisé pour la connexion</Text>

                        <Controller control={control} name={'whatsapp_number'} render={({field:{onChange, onBlur, value}})=> (
                            <TextInput placeholderTextColor="gray" placeholder={'N° WhatsApp'} style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} keyboardType={'phone-pad'} />
                        )}/>
                        {errors.whatsapp_number && <Text>{errors.whatsapp_number.message}</Text>}

                        <Controller control={control} name={'password'} render={({field:{onChange, onBlur, value}})=> (
                            <TextInput placeholderTextColor="gray" placeholder={'Mot de passe'} style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry />
                        )}/>
                        {errors.password && <Text>{errors.password.message}</Text>}

                        <Controller control={control} name={'confirm_password'} render={({field:{onChange, onBlur, value}})=> (
                            <TextInput placeholderTextColor="gray" placeholder={'Confirmez mot de passe'} style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} secureTextEntry />
                        )}/>
                        {errors.confirm_password && <Text>{errors.confirm_password.message}</Text>}

                        <TouchableOpacity disabled={mutation.isPending} onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                            {mutation.isPending ? <ActivityIndicator /> : <Text style={{fontSize: 18, fontWeight: '700'}}>Créer</Text>}
                        </TouchableOpacity>

                    </View>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable onPress={()=>router.back()}><Text>Se connecter</Text></Pressable>
                        <Link href={'/(tabs)'}><Text>Retour à l'accueil</Text></Link>

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
    logoContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        gap: Spacings.padding
    },
    logo:{
        resizeMode: "cover",
        height: 87,
        width: 87,
        borderRadius: 100
    },
    form:{
        width: '100%',
        gap: Spacings.padding,
    },
    input:{
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
    },
    loginBtn:{
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
})