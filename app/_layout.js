import {Stack} from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();    // display the native splash screen


export default function Layout() {
    const [fontsLoaded] = useFonts({
            DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
            DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
            DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();         // once we have the content to show, hide the native splash screen.
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />

}