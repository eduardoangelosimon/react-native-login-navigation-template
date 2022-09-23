import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Image, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { sessionOut } from '../../store/session/sessionSlice';
import styles from './styles';

const Configuration: React.FC = ({navigation}: any) => {
  const dispatch = useDispatch();

  const logout = () => {
      dispatch(sessionOut);
      navigation.navigate("Login");
  }

  const [isEnabled, setIsEnabled] = useState(false)

  const handleBiometricAuthenticationSwitch = () => {
    
    {isEnabled ? setIsEnabled(false) : setIsEnabled(true)}

    const newStatus ={
      isEnabled
    }
    console.log(newStatus)
  }

  return(
    <>
        <SafeAreaView>
            <View style={styles.container}>
              <View
                style={styles.button}
              >
                <View> 
                  <Text style={styles.buttonText}>App Protection</Text>
                  <Text style={styles.buttonSubText}>Biometric Authentication</Text>
                </View> 
                <Switch
                  onChange={() => {
                    handleBiometricAuthenticationSwitch()
                  }}
                  value={isEnabled}
                />
              </View>
              <TouchableOpacity 
                style={styles.button}
                onPress={logout}
              >
                <Text style={styles.buttonText}>Logout</Text>
                <Image
                  style={styles.buttonIcon}
                  source={require('../../assets/right-arrow.png')}
                />
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
  );
}

export default Configuration;