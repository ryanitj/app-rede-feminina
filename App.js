import 'react-native-gesture-handler';
import { Stack, Tabs } from './src/navigation/routes';
import auth from '@firebase/auth';
import { UserDataProvider } from './src/context/user';
import Toast, { BaseToast } from 'react-native-toast-message';
import { Montserrat_200ExtraLight, Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';
import { toastConfig } from './src/config/toast';
import { LoadingProvider } from './src/context/loading';
import Router from './src/navigation/navigator';
import { AuthProvider } from './src/context/auth';

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
    <AuthProvider>
      <UserDataProvider>
        <LoadingProvider>
          <Router />
          <Toast config={toastConfig} />
        </LoadingProvider>
      </UserDataProvider>
    </AuthProvider>
  );
}
