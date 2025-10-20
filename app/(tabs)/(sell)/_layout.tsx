import {router, Stack} from "expo-router";
import {Pressable} from "react-native";
import {X} from "lucide-react-native";
import {Colors} from "@/shared/styles";
import React from "react";

export default function SellLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false, title: 'Mes ventes'}}/>
            <Stack.Screen name="addproduct/index" options={{
                headerShown: true,
                title: 'Ajouter un produit',
                presentation: 'modal',
                animation: 'slide_from_bottom',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerLeft: () => (
                    <Pressable style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => router.back()}>
                        <X color={Colors.textColor}/>
                    </Pressable>
                )
            }}/>
        </Stack>
    )
}