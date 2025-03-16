import Animated from "react-native-reanimated";
import macbook from "@/assets/images/products_img/macbook-detail.png"
import {Text, Dimensions, ScrollView, StyleSheet, View, Pressable} from "react-native";
import {Colors, Fonts, Spacings} from "@/shared/styles";
import {Plus} from "lucide-react-native";
import SellerInfoComponent from "@/components/SellerInfoComponent/SellerInfoComponent";
import ButtonsComponent from "@/components/ButtonsComponent/ButtonsComponent";
import WarningComponent from "@/components/WarningComponent/WarningComponent";

export default function DetailsScreen(){
    return(
        <Animated.ScrollView style={{flex: 1, backgroundColor: Colors.bgColor}}>
            <View style={styles.container}>
                <View style={{width: '100%', gap: Spacings.padding}}>
                    <Animated.Image source={macbook} style={styles.image} sharedTransitionTag={'productTransitionTag'}/>
                    <View>
                        <Text style={{fontFamily: Fonts.poppinsBold, fontSize: 18, fontWeight: '500'}}>Macbook M1 Pro 2021</Text>
                        <Text style={{fontFamily: Fonts.poppinsBold, fontSize: 22, fontWeight: '700'}}>470 000F CFA</Text>
                    </View>
                </View>

                <View style={styles.contactContainer}>
                    <Text style={styles.sectionTitle}>Contact</Text>
                    <SellerInfoComponent/>
                </View>
                <View >
                    <ButtonsComponent/>
                </View>
                <View >
                    <WarningComponent/>
                </View>
                <View style={styles.contactContainer}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <View style={{paddingVertical: Spacings.padding*2, borderTopColor: Colors.borderColor, borderTopWidth: 1, borderBottomColor: Colors.borderColor, borderBottomWidth: 1}}>

                        <Text>
                            FLASH PROMOTION  50% DE REMISE SUR TOUT NOS ARTICLES 🎁{'\n'}
                            Apple MacBook Pro 16" 1 To SSD 128 Go RAM Puce Apple M3 Max CPU 16 cœurs GPU 40 cœurs Noir sidéral NEUF ET SCELLÉ DANS LE CARTON D’ORIGINE AVEC TOUT LES ACCESSOIRES {'\n'}Processor {'\n'}Graphics {'\n'}Memory {'\n'}Serial number macOs 2.4 GHz Quad-Core {'\n'}Intel Core 15 Intel Iris Plus Graphics 655 1536 MB 8 GB 2133 MHZ LPDDR3 C02YN35VLVDC Sonoma 14.3.1 {'\n'}•SCELLÉ DANS LE CARTON D'ORIGINE✅ {'\n'}•PAIEMENT ÉCHELONNÉ ✅ SUR 6MOIS {'\n'}•ACHAT DIRECT✅ {'\n'}•GARENTIE 24 MOIS ✅ {'\n'}•LIVRAISON OFFERTE ✅ {'\n'}•CONTACT: ☎️ +2250566509244☎️ {'\n'}NB: PROMOTION LIMITÉ 🛑(00h00)
                        </Text>
                    </View>
                </View>
            </View>
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: Spacings.containerPadding,
        gap: 30,
        paddingBottom: Spacings.padding * 8
    },
    image: {
        resizeMode: "cover",
        width: '100%',
        height: 192,
        borderRadius: 8,
    },
    sectionTitle:{
        fontSize: 18,
        fontWeight: 600,
        color: Colors.textColor
    },
    contactContainer:{
        width: '100%',
        gap: 5
    }
})