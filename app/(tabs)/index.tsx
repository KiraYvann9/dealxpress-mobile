import {Image, StyleSheet, Platform, View, FlatList} from 'react-native';


import {Tabs} from 'expo-router';
import {Colors, Spacings} from '@/shared/styles';
import ProductCard from '@/components/ProductCard/ProductCard';

import {datas, DataType} from '@/shared/data'
import React from "react";
import {SearchComponent} from "@/components";


export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <SearchComponent/>

            <FlatList
                data={datas}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                //horizontal={true}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({item}) => <ProductCard data={item}/>}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: Spacings.containerPadding,
        gap: Spacings.padding,
    },
    row: {

        justifyContent: 'space-between',
        gridTemplateRows: 'auto 1fr',
        gap: Spacings.padding,
        width: '100%',
        height: '100%',
        marginBottom: Spacings.padding,
        flex: 1,

    }
});
