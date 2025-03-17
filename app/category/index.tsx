import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {categoryDataType, categoryData} from "@/shared/category-data";
import {Colors, Spacings} from "@/shared/styles";

export default function CategoryScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                {/*
                <Text style={{fontSize: 20, fontWeight: '600'}}>Visitez nos catégories</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 18, fontWeight: '500', textAlign: 'center'}}>Voir tout</Text>
                </TouchableOpacity>
                */}

                <FlatList
                    data={categoryData}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}:{item: categoryDataType})=>(
                        <TouchableOpacity style={styles.category}>
                            <Image source={item.image} style={styles.image}/>
                            <Text style={styles.categoryTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingHorizontal: Spacings.containerPadding,
        gap: Spacings.containerPadding
    },
    button:{
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowOffset:{
            width: 5,
            height: 5,
        },
        shadowRadius: 2,
        shadowColor: "rgba(0,0,0,0.5)",
        elevation: 5,
        alignItems:'center',
        justifyContent: 'center',
        height: 42,
    },
    category:{
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 8,
        shadowOffset:{
            width: 5,
            height: 5,
        },
        shadowRadius: 2,
        shadowColor: "rgba(0,0,0,0.5)",
        elevation: 5,
        paddingVertical: Spacings.containerPadding,
        alignItems:'center',
        gap: Spacings.padding
    },
    categoryTitle:{
        fontSize: 16,
        color: Colors.textColor,
        textAlign: 'center',
    },
    image:{
        resizeMode: 'contain',
        height: 121,
        width: 169
    },
    row:{
        justifyContent: 'space-between',
        gridTemplateRows: 'auto 1fr',
        flexGrow: 1,
        gap: 15,
        paddingVertical: Spacings.padding,
    }
})