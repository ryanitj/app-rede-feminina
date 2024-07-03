import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toast';
import { UserDataProvider } from './src/context/user';
import { LoadingProvider } from './src/context/loading';
import { AuthProvider } from './src/context/auth';
import Router from './src/navigation/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';

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
      <UserDataProvider>
        <AuthProvider>
          <LoadingProvider>
            <Router />
            <Toast config={toastConfig} />
          </LoadingProvider>
        </AuthProvider>
      </UserDataProvider>
    </NavigationContainer>
  );
}
