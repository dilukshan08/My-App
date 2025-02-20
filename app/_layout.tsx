import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import React from "react";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
     <StatusBar style = "light"/>
      <Stack>
       <Stack.Screen name="(tabs)" options={{
        headerShown: false,
        }}
      />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </>
  );
}