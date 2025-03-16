import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";
import {Link} from "expo-router";

export default function SearchComponent(){
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={'iPhone 11, Macbook, Samsung,...'}/>

            <Link href={'/'}>
                <Text>Catégiries</Text>
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    input: {
        height: Dimension.inputHeight,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        backgroundColor: Colors.inputBgColor,
        borderRadius: 4,
        flex: 1,
        paddingHorizontal: Spacings.padding,
    }
})