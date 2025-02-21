import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
     <StatusBar style = "light"/>
      <Stack>
       <Stack.Screen name="(tabs)" options={{
        headerShown: false,
        }}
      />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}