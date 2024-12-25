import { SplashScreen, Stack } from "expo-router";
import "./globals.css"
import { useFonts } from "expo-font";
import { useEffect } from "react";
export default function RootLayout() {
  const fontsLoaded = useFonts({
    "Rubik-Bold": "../assets/fonts/Rubik-Bold.ttf",
    "Rubik-ExtraBold": "../assets/fonts/Rubik-ExtraBold.ttf",
    "Rubik-Light": "../assets/fonts/Rubik-Light.ttf",
    "Rubik-Medium": "../assets/fonts/Rubik-Medium.ttf",
    "Rubik-Regular": "../assets/fonts/Rubik-Regular.ttf",
    "Rubik-SemiBold": "../assets/fonts/Rubik-SemiBold.ttf",
    "SpaceMono-Regular": "../assets/fonts/SpaceMono-Regular.ttf"
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
