import {StyleSheet, View} from "react-native";
import {Colors} from "@/shared/styles";

export default function SellerInfoComponent() {
    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
    }
})