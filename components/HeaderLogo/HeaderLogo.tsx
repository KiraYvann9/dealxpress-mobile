import { Colors, Fonts, Spacings } from "@/shared/styles";
import { Bell } from "lucide-react-native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import {Link, router} from "expo-router";

export default function HeaderLogo(){
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <View style={styles.logoContainer}>
                    <Image source={require('@/assets/images/icon.png')} style={styles.image} />
                    <Text style={styles.text}>dealxpress</Text>
                </View>
                <Link href={'/notification/modal'}>
                    <Bell size={24} color={Colors.textColor}/>
                </Link>
            </View>
            <SearchComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        gap: 21,
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#fff'
    },
    logoContainer: {
        flexDirection: 'row', 
        gap: 10,
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        height: 40,
        width: 40
    },
    text: {
        fontFamily: Fonts.poppinsBold,
        fontSize: 18,
        color: Colors.textColor
    }
})