import {useFonts} from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {Pressable} from "react-native";
import {ChevronLeft, Cross, Plus, X} from "lucide-react-native";
import {Colors} from "@/shared/styles";
import React from 'react';
import {QueryProvider} from "@/components/QueryProvider";
import {SafeAreaView} from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <QueryProvider>

            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
                <Stack.Screen name="notification/modal" options={{
                    title: 'Me Notifier',
                    headerShown: true,
                    presentation: 'modal',
                }}/>
                <Stack.Screen
                    name={'details/[id]'}
                    options={{
                        title: 'Details',
                        presentation: 'fullScreenModal',
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        animation: 'fade',
                        headerLeft: () => (
                            <Pressable onPress={() => router.back()}>
                                <X color={Colors.textColor}/>
                            </Pressable>
                        )
                    }}/>
                <Stack.Screen
                    name={'category/index'}
                    options={{
                        title: 'Catégories',
                        presentation: 'modal',
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <Pressable style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}} onPress={() => router.back()}>
                                <X color={Colors.textColor}/>
                            </Pressable>
                        )
                    }}
                />
            </Stack>

            <StatusBar style="dark"/>
        </QueryProvider>
    );
}
