import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {useColorScheme} from '@/hooks/useColorScheme';

import {ArrowLeftRight, Layers, UserRound} from 'lucide-react-native'
import {Colors} from "@/shared/styles";
import { Header } from '@/components';
import {StatusBar} from "expo-status-bar";

export default function TabLayout() {
    const colorScheme = useColorScheme() ?? 'light';

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: colorScheme === 'dark' ? Colors.yellow : Colors.dark,
                    // headerShown: false,
                    // tabBarButton: HapticTab,
                    tabBarStyle: Platform.select({


                        default: {
                            backgroundColor: colorScheme === 'dark' ? Colors.dark : '#fff',
                            borderTopWidth: 0
                        },
                    }),

                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Pour toi',
                        tabBarIcon: ({color}) => <Layers size={28} color={color}/>,
                        header: () => <Header/>
                    }}
                />
                <Tabs.Screen
                    name="sell"
                    options={{
                        title: 'Vendre',
                        tabBarIcon: ({color}) => <ArrowLeftRight size={28} color={color}/>,
                        header: () => <Header/>
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Mon compte',
                        tabBarIcon: ({color}) => <UserRound size={28} color={color}/>,
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                    }}
                />
            </Tabs>
            <StatusBar style="auto" backgroundColor={"#fff"}/>
        </>
    );
}
