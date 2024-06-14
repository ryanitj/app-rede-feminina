import { PermissionsAndroid } from 'react-native';

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const response = await launchImageLibrary({ mediaType: 'photo' }, () => {});
    } else {
      console.warn('Storage permission denied');
    }
  } catch (err) {
    console.log(err)
    console.error('Error requesting storage permission:', err);
  }
};

