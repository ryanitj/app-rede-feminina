import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';
import { toastConfig } from './src/config/toast';
import { UserDataProvider } from './src/context/user';
import { LoadingProvider } from './src/context/loading';
import { AuthProvider } from './src/context/auth';
import Router from './src/navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_200ExtraLight,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <UserDataProvider>
          <LoadingProvider>
            <Router />
            <Toast config={toastConfig} />
          </LoadingProvider>
        </UserDataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
