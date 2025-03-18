import {FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, Spacings} from "@/shared/styles";

import boutiquePhoto from "@/assets/images/others/boutiqueProfileImage.png"
import {Box, Eye, FilePenLine, Plus, RefreshCw, Trash} from "lucide-react-native";

import {datas, DataType} from "@/shared/data";
import {GestureHandlerRootView} from "react-native-gesture-handler";

//const renderActions = () =>()

export default function SellScreen(){
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: Spacings.padding}}>
                <Image source={boutiquePhoto} style={styles.profileImage}/>
                <TouchableOpacity style={styles.addBtn}>
                    <Plus color={Colors.textColor}/>
                    <Text style={{fontSize: 16, color: Colors.textColor}}>Ajouter une anonce</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: Spacings.padding*2, gap: Spacings.padding}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>Aperçu</Text>
                <View style={{flexDirection: 'row', gap: Spacings.padding}}>
                    <View style={styles.statCard}>
                        <View>
                            <Text style={{fontSize: 32, fontWeight: '700'}}>0</Text>
                            <Text>Visite(s)</Text>
                        </View>
                        <Eye size={24} color={Colors.textColor}/>
                    </View>
                    <View style={styles.statCard}>
                        <View>
                            <Text style={{fontSize: 32, fontWeight: '700'}}>{datas.length}</Text>
                            <Text>Article(s)</Text>
                        </View>
                        <Box size={24} color={Colors.textColor}/>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, marginTop: Spacings.padding*2, gap: Spacings.padding}}>

                <Text style={{fontSize: 18, fontWeight: '500'}}>Mes articles</Text>

                <FlatList
                    data={datas}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{gap: Spacings.padding, paddingBottom: Spacings.padding*7}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}:{item: DataType})=>(
                    <Pressable style={styles.card}>
                        <Image source={item.imgUrl} style={styles.image}/>
                        <View style={{flexDirection: 'column', height: '100%', justifyContent: 'space-evenly'}}>
                            <Text>{item.name}</Text>
                            <Text>F CFA{item.price}</Text>
                            <Text>{item.date}</Text>
                        </View>
                        <View style={{marginLeft: 'auto', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Pressable>
                                <RefreshCw size={24} color={Colors.textColor}/>
                            </Pressable>
                            <Pressable>
                                <FilePenLine size={24} color={Colors.textColor}/>
                            </Pressable>
                            <Pressable>
                                <Trash size={24} color={Colors.red}/>
                            </Pressable>
                        </View>
                    </Pressable>
                )}/>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: Spacings.containerPadding,
        gap: Spacings.padding,
    },
    profileImage: {
        resizeMode: "cover",
        height: 52,
        width: 52,
        borderRadius: 100,
    },
    addBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: Spacings.padding,
        backgroundColor: Colors.yellow,
        borderRadius: 8,
        paddingVertical: Spacings.padding,
        paddingHorizontal: Spacings.padding*4,
    },
    statCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        flex: 1,
        padding: Spacings.padding,
        backgroundColor: '#fff'
    },
    card:{
        height: 115,
        padding: Spacings.padding/2,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 8,
        flexDirection: "row",
        gap: Spacings.padding,
        backgroundColor: '#fff',
    },
    image: {
        resizeMode: "contain",
        height: 103,
        width: 120,
        borderRadius: 8,
    }
})