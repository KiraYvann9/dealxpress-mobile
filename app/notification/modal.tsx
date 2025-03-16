import {Dimensions, Pressable, StyleSheet, Text, TextInput, View, Modal} from "react-native";
import {Colors, Dimension, Spacings} from "@/shared/styles";
import {Bell} from "lucide-react-native";

//const {height} = Dimensions.get("window");
export default function NotificationModal(){
    return(
        <View style={styles.container}>
            <Text style={styles.description}>Vous serez notifié lorsqu’une publication correspondra à votre filtre appliqué</Text>
            <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Article recherché *</Text>
                    <TextInput style={styles.input}/>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Interval de prix *</Text>

                    <View style={{width: '100%', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <TextInput keyboardType={'numeric'} style={[styles.input, {flex: 1}]} placeholder={'Minimum'}/>
                        <Text>à</Text>
                        <TextInput keyboardType={'numeric'} style={[styles.input, {flex: 1}]} placeholder={'Maximum'}/>
                    </View>

                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Commune:</Text>
                    <TextInput style={styles.input}/>
                </View>

                <Pressable style={styles.button}>
                    <Bell size={24} color={Colors.textColor}/>
                    <Text>Créer une notification</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacings.containerPadding,
        backgroundColor: Colors.bgColor,
        gap: 34,
        //height: height/2
    },
    description: {
        fontSize: 11,
    },
    formContainer: {
        width: '100%',
        gap: 15
    },
    formGroup: {
        width: '100%',
        gap: 10
    },
    label: {

    },
    input:{
        borderWidth: 1,
        borderColor: Colors.borderColor,
        backgroundColor: Colors.inputBgColor,
        height: Dimension.inputHeight,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding
    },
    button: {
        backgroundColor: Colors.yellow,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 4,
        height: Dimension.buttonHeight,
    }
})