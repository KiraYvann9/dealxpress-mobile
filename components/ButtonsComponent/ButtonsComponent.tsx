import {Pressable, StyleSheet, View} from "react-native";
import {MessageCircle, Share2, ShieldAlert} from "lucide-react-native";
import {Colors} from "@/shared/styles";

export default function ButtonsComponent() {
    return(
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <ShieldAlert size={25} color={Colors.textColor}/>
            </Pressable>
            <Pressable style={styles.button}>
                <MessageCircle size={25} color={Colors.textColor}/>
            </Pressable>
            <Pressable style={styles.button}>
                <Share2 size={25} color={Colors.textColor}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 22
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: '100%',
        backgroundColor: Colors.inputBgColor,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowColor: Colors.borderColor,
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,

    }
})