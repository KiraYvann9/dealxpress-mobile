import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, router} from "expo-router";

import {useMutation} from "@tanstack/react-query";

import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import {supabase} from "@/lib/supabase";
import {AppleAuthButton} from "@/components/AuthProviderButtons/Auth.native";

const schema = z.object({
    phone: z.string().min(6, 'Téléphone invalide'),
    password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})


export default function LoginScreen() {

    const {formState: {errors}, handleSubmit, control} = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            phone: '',
            password: '',
        },
    })

    const mutation = useMutation({
        mutationFn:async ({ phone, password }: z.infer<typeof schema>)=> {
            const normalize = (p: string) => {
                const trimmed = (p || '').trim();
                if (!trimmed) return trimmed;
                let t = trimmed.replace(/[^\d+]/g, '');
                if (!t.startsWith('+')) {
                    if (t.startsWith('0')) t = t.substring(1);
                    t = `+225${t}`;
                }
                return t;
            }
            const phoneE164 = normalize(phone);
            const { error } = await supabase.auth.signInWithPassword({ phone: phoneE164, password })
            if (error) throw error
        },
        onSuccess: () => {
            Alert.alert('Connexion réussie')
        },
        onError: (error) => {
            Alert.alert(error.message)
        }
    })

    const onSubmit = (credential: z.infer<typeof schema>)=>{
        // console.log(credential)
        mutation.mutate(credential)
    }

    return (
        <ScrollView style={{flex:1, backgroundColor: '#fff'}} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image source={logo} style={styles.logo}/>
                            <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
                        </View>

                        <View style={styles.form}>
                            <Controller
                                control={control}
                                name={'phone'}
                                render={({field: {onBlur, onChange, value}}) => (
                                    <TextInput
                                        placeholderTextColor="gray"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder={'N° de téléphone *'}
                                        style={styles.input}
                                    />
                                )}
                            />
                            {errors.phone && <Text>{(errors as any).phone?.message}</Text>}
                            <Controller
                                control={control}
                                name={'password'}
                                render={({field: {onBlur, onChange, value}}) => (
                                    <TextInput
                                        placeholderTextColor="gray"
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder={'Mot de passe *'}
                                        style={styles.input}
                                        secureTextEntry={true}
                                    />
                                )}
                            />
                            {errors.password && <Text>{(errors as any).password?.message}</Text>}
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                                <Text style={{fontSize: 18, fontWeight: '700'}}>Se connecter</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Pressable><Text>Avec N° Téléphone</Text></Pressable>
                            <Link href={'/'}><Text>Mot de passe oublié</Text></Link>
                        </View>
                        <View>
                            <Link href={'/(auth)/register'}><Text>Créer un compte</Text></Link>
                        </View>

                        {/*<AppleAuthButton/>*/}

                        <View style={{marginTop: 'auto'}}>
                            <Text style={{textAlign: 'center', fontSize: 12, fontWeight: '400'}}>From</Text>
                            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>Artisan Studio</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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
        gap: Spacings.padding,
    },
    input: {
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
    },
    loginBtn: {
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
})