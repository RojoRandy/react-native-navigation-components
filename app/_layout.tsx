import { Slot, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font'
import "./global.css"
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'Modelica-Regular': require('../assets/fonts/Modelica-Regular.otf'),
    'Modelica-RegularItalic': require('../assets/fonts/Modelica-RegularItalic.otf'),
    'Modelica-Bold': require('../assets/fonts/Modelica-Bold.otf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(()=> {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
}

export default RootLayout;