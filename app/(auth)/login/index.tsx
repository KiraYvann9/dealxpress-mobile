import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link} from "expo-router";


export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
                <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
            </View>

            <View style={styles.form}>
                <TextInput placeholderTextColor="gray" placeholder={'Email *'} style={styles.input}/>
                <TextInput placeholderTextColor="gray" placeholder={'Mot de passe *'} style={styles.input}/>
                <TouchableOpacity onPress={()=>{}} style={styles.loginBtn}>
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



            <View style={{marginTop: 'auto'}}>
                <Text style={{textAlign: 'center', fontSize: 12, fontWeight: '400'}}>From</Text>
                <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>Artisan Studio</Text>
            </View>
        </View>
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