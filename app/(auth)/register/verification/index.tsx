import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, router} from "expo-router";


export default function VerificationScreen(){
    return(
        <ScrollView style={{flex: 1, backgroundColor: "white"}}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
                </View>

                <Text style={{fontSize: 14, fontWeight: '500', textAlign: 'center', color: Colors.textColor}}>
                    Un message contenant le code de vérification de 4 chiffres vous a été envoyé par mail. Veuillez saisir ce code dans le champ ci-dessous.
                    Le code est à usage unique
                </Text>

                <View style={styles.form}>
                    <TextInput keyboardType={'numeric'} maxLength={4} placeholderTextColor="gray" placeholder={'____'} style={styles.input}/>

                    <Text style={{fontSize: 14, fontWeight: '400'}}>Vous n'avez pas reçu de code ?</Text>
                    <TouchableOpacity onPress={()=>{}} style={{width: 'auto'}}>
                        <Text style={{fontSize: 16, fontWeight: '700'}}>RENVOYER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>router.push('/(auth)/register/registration-done')} style={styles.loginBtn}>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>Vérifier</Text>
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
        gap: Spacings.padding*2,
    },
    input:{
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
        width: '50%',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 12,
    },
    loginBtn:{
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
})