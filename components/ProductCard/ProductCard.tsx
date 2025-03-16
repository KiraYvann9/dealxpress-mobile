import {Colors, Fonts, Spacings} from "@/shared/styles";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {Dimensions} from "react-native";
import {DataType} from "@/shared/data";
import {Locate, MapPin, Timer} from "lucide-react-native";
import {router} from "expo-router";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function ProductCard({data}: { data: DataType }){
    return(
        <Pressable style={styles.container} onPress={()=>router.push({
            params: {id: data.id},
            pathname: '/details/[id]'
        })}>
            <Animated.Image source={data.imgUrl} style={styles.image} sharedTransitionTag={'productTransitionTag'}/>
            <View style={styles.info}>
                <View style={styles.cardHeader}>
                    <Text style={{fontFamily: Fonts.poppinsSemiBold}}>FCFA 470.000</Text>
                    <Text>Macbook Pro M1 </Text>
                </View>
                <View style={{gap: 8}}>
                    <View style={{flexDirection: 'row', gap: Spacings.padding/2, alignItems: 'center'}}>
                        <MapPin color={Colors.textColor} size={18}/>
                        <Text>{data.location}</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: Spacings.padding/2, alignItems: 'center'}}>
                        <Timer color={Colors.textColor} size={18}/>
                        <Text>{data.date}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
        width: (width / 2) - 18,
        height: 'auto',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    info: {
        width: '100%',
        paddingVertical: Spacings.padding / 2,
        gap: 10
    },
    cardHeader:{

    }
})