import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";
import {Link, router} from "expo-router";
import {SlidersHorizontal} from "lucide-react-native";

export default function SearchComponent(){
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={'iPhone 11, Macbook, Samsung,...'}/>

            <Pressable onPress={()=>router.push('/category')} style={styles.filter}>
                <SlidersHorizontal size={24} color={'#fff'}/>
                <Text style={{color: '#fff'}}>Filtre</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 5,
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
    },
    filter:{
        flexDirection: 'row',
        gap: Spacings.padding,
        alignItems: 'center',
        padding: Spacings.padding,
        height : Dimension.inputHeight,
        backgroundColor: Colors.textColor,
        borderRadius: 4
    }
})