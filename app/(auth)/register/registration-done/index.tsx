import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";

import logo from '@/assets/images/icon.png'
import {Link, router} from "expo-router";
import {CircleCheckBig} from "lucide-react-native";


export default function RegistrationDoneScreen(){
    return(
        <ScrollView style={{flex: 1, backgroundColor: "white"}}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>dealxpress</Text>
                </View>

                <Text style={{fontSize: 22, fontWeight: '700', textAlign: 'center', color: Colors.textColor}}>
                    Félécitaion !
                </Text>

                <CircleCheckBig size={98} color={Colors.green}/>

                <Text style={{fontSize: 14, fontWeight: '500', textAlign: 'center', color: Colors.textColor}}>
                    Votre compte a été créer avec succès
                </Text>

                <TouchableOpacity onPress={()=>router.push('/(tabs)')} style={styles.loginBtn}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>Terminer</Text>
                </TouchableOpacity>




            </View>
            <View style={{marginTop: 'auto'}}>
                <Text style={{textAlign: 'center', fontSize: 12, fontWeight: '400'}}>From</Text>
                <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>Artisan Studio</Text>
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
        backgroundColor: Colors.inputBgColor,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
})