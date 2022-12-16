import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './src/screens/Home'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent'
        translucent
      />

      <Home />
    </>
  );
}