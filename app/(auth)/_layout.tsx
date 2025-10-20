import {router, Stack} from "expo-router";
import {Pressable} from "react-native";
import {ChevronLeft} from "lucide-react-native";
import {Colors} from "@/shared/styles";

export default function AuthLayout(){
    return (
        <Stack>
            <Stack.Screen
                name={'index'}
                options={{
                    title: 'Connexion',
                    headerTitleAlign: 'center',
                    // headerShadowVisible: false,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()}>
                            <ChevronLeft color={Colors.textColor} size={24}/>
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name={'register/index'}
                options={{
                    title: 'Créer votre compte',
                    animation: 'slide_from_right',
                    headerTitleAlign: 'center',
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()}>
                            <ChevronLeft color={Colors.textColor} size={24}/>
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name={'register/verification/index'}
                options={{
                    title: 'Vérification',
                    presentation: 'fullScreenModal',
                    animation: 'slide_from_right',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()}>
                            <ChevronLeft color={Colors.textColor} size={24}/>
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name={'register/registration-done/index'}
                options={{
                    title: 'Vérification',
                    presentation: 'fullScreenModal',
                    animation: 'slide_from_right',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()}>
                            <ChevronLeft color={Colors.textColor} size={24}/>
                        </Pressable>
                    )
                }}
            />

        </Stack>
    )
}