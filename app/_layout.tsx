import {  Stack } from "expo-router";
import "./globals.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Geist-Bold": require("../assets/fonts/Geist-Bold.ttf"),
    "Geist-ExtraBold": require("../assets/fonts/Geist-ExtraBold.ttf"),
    "Geist-Light": require("../assets/fonts/Geist-Light.ttf"),
    "Geist-Medium": require("../assets/fonts/Geist-Medium.ttf"),
    "Geist-Regular": require("../assets/fonts/Geist-Regular.ttf"),
    "Geist-SemiBold": require("../assets/fonts/Geist-SemiBold.ttf"),
  })
  useEffect(() => {
    if (fontsLoaded) {
      console.log("Fonts are loaded!");
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
