import {Image, StyleSheet, Platform, View, SafeAreaView, FlatList} from 'react-native';


import { Tabs } from 'expo-router';
import { Colors, Spacings } from '@/shared/styles';
import HeaderLogo from '@/components/HeaderLogo/HeaderLogo';
import ProductCard from '@/components/ProductCard/ProductCard';

import {datas, DataType} from '@/shared/data'
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
      <>
        <Tabs.Screen options={{
          headerShown: false,
        }}/>

          <View style={styles.container}>
            <HeaderLogo />

            <View style={{
              backgroundColor: Colors.bgColor,
              flex: 1,
              paddingBottom: 50
            }}>
              <FlatList
                data={datas}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                //horizontal={true}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => <ProductCard data={item}/>}
              />
            </View>

          </View>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Spacings.containerPadding/2,
  },
  row:{
    justifyContent: 'space-between',
    gridTemplateRows: 'auto 1fr',
    flexGrow: 1,
    gap: 15,
    paddingBottom: Spacings.padding,
  }
});
