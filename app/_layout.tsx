import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {Pressable} from "react-native";
import {Cross, Plus, X} from "lucide-react-native";
import {Colors} from "@/shared/styles";

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
              title: 'Categories',
              presentation: 'modal',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerLeft: ()=>(
                  <Pressable onPress={()=>router.back()}>
                    <X color={Colors.textColor}/>
                  </Pressable>
              )
        }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
