import React, { useState } from 'react';
import { Text, SafeAreaView, View, Switch } from 'react-native';
import styles from './styles';

const Configuration: React.FC = () => {

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
            </View>
        </SafeAreaView>
    </>
  );
}

export default Configuration;