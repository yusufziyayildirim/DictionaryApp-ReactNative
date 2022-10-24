import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation'
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Image, View, Text } from 'react-native';
import { Logo } from './src/components/icons';


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <>
        <Image source={require('./src/assets/image/bg.jpg')} style={{ height: "100%", position: "absolute" }} />
        <View style={{ height: "100%", justifyContent: "center", position: "relative", alignItems: "center" }}>
          <Logo color="white" style={{ transform: [{ scale: 1.5 }] }} />
          <Text style={{ fontWeight: "700", fontSize: 14, color: "white", position: "absolute", bottom: 148 }}>Türkçe Sözlük</Text>
        </View>
      </>

    );
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView} >
      <Navigation />
    </SafeAreaProvider>
  );
}