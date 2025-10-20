import {Colors, Fonts, Spacings} from "@/shared/styles";
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from "react-native";
import {DataType} from "@/shared/data";
import {Locate, MapPin, Timer} from "lucide-react-native";
import {router} from "expo-router";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function ProductCard({data}: { data: DataType }){
    return(
        <TouchableOpacity style={styles.container} onPress={()=>router.push({
            params: {id: data.id},
            pathname: '/details/[id]'
        })}>
            <Animated.Image source={data.imgUrl} style={styles.image} />
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
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height: 'auto',
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: Colors.borderColor,
        // borderRadius: 8,
        padding: Spacings.padding/2,
        gap: Spacings.padding,
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
    },
    info: {
        gap: 10,
    },
    cardHeader:{

    }
})