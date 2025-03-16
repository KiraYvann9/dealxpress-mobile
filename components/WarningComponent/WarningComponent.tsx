import {StyleSheet, Text, View} from "react-native";
import {Spacings} from "@/shared/styles";
import {TriangleAlert} from "lucide-react-native";

export default function WarningComponent(){
    return(
        <View style={styles.container}>
            <TriangleAlert size={28} color={'rgb(255, 66, 66)'}/>
            <View style={{flex: 1, gap: Spacings.padding}}>
                <Text style={{fontWeight: '700'}}>ATTENTION AUX ARNAQUES</Text>
                <Text>Ne faites de dépôt à personne sans avoir vu ou reçu l’article</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(255, 66, 66, .25)',
        borderWidth: 1,
        borderColor: 'rgb(255, 66, 66)',
        padding: Spacings.padding,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacings.padding,
    }
})