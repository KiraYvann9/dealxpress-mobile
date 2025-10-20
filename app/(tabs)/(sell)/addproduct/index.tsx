import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
    KeyboardAvoidingView,
    ScrollView, Platform
} from 'react-native'
import React from 'react'

import boutiquePhoto from "@/assets/images/others/boutiqueProfileImage.png"
import {Colors, Dimension, Spacings} from '@/shared/styles'
import {Link, router} from 'expo-router'
import {Camera, Image as LogoImage, X} from 'lucide-react-native'

import * as ImagePicker from 'expo-image-picker';


const index = () => {

    const [image, setImage] = React.useState<string[] | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
            selectionLimit: 6,

        });

        console.log(result);

        if (!result.canceled) {
            const uris = result.assets.map(asset => asset.uri);
            setImage(uris);
        }
    };

    const deleteImage = (index: number) => {
        return () => {
            const newImage = [...image!];
            newImage.splice(index, 1);
            setImage(newImage);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={{ backgroundColor: "#fff", flex: 1, height: "100%" }}
                contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: Spacings.padding}}>
                        <Image source={boutiquePhoto} style={styles.profileImage}/>
                        <View>
                            <Text style={styles.name}>M. Konaté Oumar</Text>
                            <Text style={styles.description}>Ajoutez un article à votre boutique</Text>
                        </View>
                    </View>

                    <View style={styles.images}>
                        <View style={{flexDirection: 'row', gap: Spacings.padding, width: '100%', flexWrap: 'wrap'}}>
                            {image && image.map((uri, index) => (
                                <View style={{position: "relative"}} key={index}>
                                    <TouchableOpacity style={{
                                        width: 30,
                                        height: 30,
                                        position: 'absolute',
                                        top: 5,
                                        right: 5,
                                        backgroundColor: '#e70a0a',
                                        zIndex: 20,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={deleteImage(index)}
                                    >
                                        <X size={16} color={'#fff'}/>
                                    </TouchableOpacity>
                                    <Image source={{uri}} style={styles.productImage}/>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity style={{alignItems: 'center'}} onPress={pickImage}>
                            <LogoImage size={28} color={Colors.textColor}/>
                            <Text>Photo</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>Photos: 0/10 - Choisissez d’abord les
                        photo principales</Text>
                    <View style={styles.form}>
                        <Pressable style={[styles.input, {justifyContent: 'center'}]}
                                   onPress={() => router.push('/category')}><Text> Catégorie *</Text></Pressable>
                        <TextInput placeholderTextColor="gray" placeholder={'Titre *'} style={styles.input}/>
                        <TextInput placeholderTextColor="gray" placeholder={'Prix *'} style={styles.input}/>
                        <TextInput placeholderTextColor="gray" placeholder={'Description'}
                                   style={[styles.input, {height: 80}]}/>
                        <TextInput placeholderTextColor="gray" placeholder={'Ville'} style={styles.input}/>
                        <TextInput placeholderTextColor="gray" placeholder={'Commune / Quartier'} style={styles.input}/>

                        <TouchableOpacity onPress={() => console.log('Publié !')} style={styles.addBtn}>
                            <Text style={{fontSize: 18, fontWeight: '700'}}>Publier</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    images: {
        minHeight: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: Spacings.padding,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderBottomColor: Colors.borderColor,
        paddingBottom: Spacings.padding,
        marginBottom: Spacings.padding,
        marginTop: Spacings.padding,
        paddingHorizontal: Spacings.padding,
        borderRadius: 4,
        // backgroundColor: Colors.inputBgColor,

    },
    productImage: {
        width: 100,
        height: 100,
    },
    form: {
        width: '100%',
        gap: Spacings.padding,
        marginBottom: Spacings.padding * 2,
    },
    input: {
        height: Dimension.inputHeight,
        backgroundColor: Colors.inputBgColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingHorizontal: Spacings.padding,
        fontSize: 18,
        fontWeight: '500',
    },
    addBtn: {
        height: Dimension.buttonHeight,
        backgroundColor: Colors.yellow,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default index