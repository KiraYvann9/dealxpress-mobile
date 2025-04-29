import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import boutiquePhoto from "@/assets/images/others/boutiqueProfileImage.png"
import { Colors, Dimension, Spacings } from '@/shared/styles'
import { Link, router } from 'expo-router'
import { Camera, Image as LogoImage } from 'lucide-react-native'


const index = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: Spacings.padding}}>
            <Image source={boutiquePhoto} style={styles.profileImage}/>
            <View>
                <Text style={styles.name}>M. Konaté Oumar</Text>
                <Text style={styles.description}>Ajoutez un article à votre boutique</Text>
            </View>    
        </View>
        <View style={styles.images}>
            <TouchableOpacity style={{alignItems: 'center'}}>
                <LogoImage size={28} color={Colors.textColor}/>
                <Text>Photo</Text>
            </TouchableOpacity>
        </View>

        <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>Photos: 0/10 - Choisissez d’abord les photo principales</Text>
        <View style={styles.form}>
            <TextInput placeholderTextColor="gray" placeholder={'Titre *'} style={styles.input}/>
            <TextInput placeholderTextColor="gray" placeholder={'Prix *'} style={styles.input}/>
            <TextInput placeholderTextColor="gray" placeholder={'Catégorie *'} style={styles.input}/>
            <TextInput placeholderTextColor="gray" placeholder={'Description'} style={[styles.input, {height: 80}]} />
            <TextInput placeholderTextColor="gray" placeholder={'Ville'} style={styles.input}/>
            <TextInput placeholderTextColor="gray" placeholder={'Commune / Quartier'} style={styles.input}/>

            <TouchableOpacity onPress={()=>console.log('Publié !')} style={styles.addBtn}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>Publier</Text>
            </TouchableOpacity>

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
    name: {
        fontSize: 18,
        fontWeight: '500'
    },
    description: {
        fontSize: 12,
        color: Colors.textColor
    },
    images:{
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    form:{
        width: '100%',
        gap: Spacings.padding,
    },
    input:{
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
    },
    addBtn:{
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default index