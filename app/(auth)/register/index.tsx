import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, router} from "expo-router";


export default function RegisterScreen(){
    return(
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
                </View>


                <View style={styles.form}>
                    <TextInput placeholderTextColor="gray" placeholder={'Prénoms ou Nom de la boutique *'} style={styles.input}/>
                    <TextInput placeholderTextColor="gray" placeholder={'Email *'} style={styles.input}/>
                    <TextInput placeholderTextColor="gray" placeholder={'N° de téléphone *'} style={styles.input}/>
                    <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>Ce numéro pourra être utilisé pour la connexion</Text>
                    <TextInput placeholderTextColor="gray" placeholder={'N° WhatsApp'} style={styles.input}/>
                    <TextInput placeholderTextColor="gray" placeholder={'Mot de passe'} style={styles.input}/>
                    <TextInput placeholderTextColor="gray" placeholder={'Confirmez mot de passe'} style={styles.input}/>

                    <TouchableOpacity onPress={()=>router.push('/(auth)/register/verification')} style={styles.loginBtn}>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>Créer</Text>
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