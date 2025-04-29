import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {Pressable} from "react-native";
import {ChevronLeft, Cross, Plus, X} from "lucide-react-native";
import {Colors} from "@/shared/styles";
import React from 'react';

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
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="notification/modal" options={{
          title: 'Me Notifier',
          headerShown: true,
          presentation: 'modal',
        }} />
        <Stack.Screen
            name={'details/[id]'}
            options={{
              title: 'Details',
              presentation: 'fullScreenModal',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              animation: 'fade',
              headerLeft: ()=>(
                  <Pressable onPress={()=>router.back()}>
                    <X color={Colors.textColor}/>
                  </Pressable>
              )
        }} />
          <Stack.Screen
            name={'category/index'}
            options={{
              title: 'Filtre',
              presentation: 'modal',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: ()=>(
                  <Pressable onPress={()=>router.back()}>
                    <X color={Colors.textColor}/>
                  </Pressable>
              )}}
          />
          <Stack.Screen
              name={'(auth)/login/index'}
              options={{
                  title: 'Connexion',
                  presentation: 'fullScreenModal',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerLeft: ()=>(
                      <Pressable onPress={()=>router.back()}>
                          <ChevronLeft color={Colors.textColor} size={24}/>
                      </Pressable>
                  )}}
          />
          <Stack.Screen
              name={'(auth)/register/index'}
              options={{
                  title: 'Créer un compte',
                  presentation: 'fullScreenModal',
                  animation: 'slide_from_right',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerLeft: ()=>(
                      <Pressable onPress={()=>router.back()}>
                          <ChevronLeft color={Colors.textColor} size={24}/>
                      </Pressable>
                  )}}
          />
          <Stack.Screen
              name={'(auth)/register/verification/index'}
              options={{
                  title: 'Vérification',
                  presentation: 'fullScreenModal',
                  animation: 'slide_from_right',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerLeft: ()=>(
                      <Pressable onPress={()=>router.back()}>
                          <ChevronLeft color={Colors.textColor} size={24}/>
                      </Pressable>
                  )}}
          />
          <Stack.Screen
              name={'(auth)/register/registration-done/index'}
              options={{
                  title: 'Vérification',
                  presentation: 'fullScreenModal',
                  animation: 'slide_from_right',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerLeft: ()=>(
                      <Pressable onPress={()=>router.back()}>
                          <ChevronLeft color={Colors.textColor} size={24}/>
                      </Pressable>
                  )}}
          />
          <Stack.Screen name={'(pages)/addproduct/index'}
            options={{
              title: 'Nouvel Article',
              headerShadowVisible: false
            }}
          />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
