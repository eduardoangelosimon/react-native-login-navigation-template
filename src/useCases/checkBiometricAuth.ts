import TouchID from "react-native-touch-id";
import { Alert, Platform } from 'react-native';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const checkBiometricAuth = async () => {
    const { getItem, setItem } = useAsyncStorage('@templateRNLoginNavigationRedux')

    const result = await getItem()
    const preferences = result ? (JSON.parse(result)) : undefined


}