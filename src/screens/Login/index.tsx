import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { sessionIn } from '../../store/session/sessionSlice';
import styles from './styles'

import TouchID from 'react-native-touch-id';

const Login: React.FC = ({navigation}: any) => {

    const [isSupported, setIsSupported] = useState(false)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch();

    const login = () => {
        navigation.navigate("Configuration")
        dispatch(sessionIn);
    }

    const checkDisableLoginButton = () => {
        if(!user || !password) {
            setDisabled(true)
            return
        }
        setDisabled(false)
    }

    const handleBiometricAuthentication = () => {
        if (biometricEnabled && !preferences?.userEnabled){
            
        }
    }

    useEffect(() => {
        TouchID.authenticate('Validate your credentials')
        .then((success: any) => {
            navigation.navigate("Configuration")
            dispatch(sessionIn);
        })
        .catch((error: any) => {
        });

        TouchID.isSupported()
        .then(success => {
            setIsSupported(true);
        })
        .catch(error => {
            console.log("Erro TouchID: " + error)
        })
    }, [])

    useEffect(() => {
        checkDisableLoginButton()
    }, [user, password])

    return(
        <>
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
                    <View style={styles.container}>
                        <View style={styles.loginContainer}>
                            <Text style={styles.title}>Welcome to Template!</Text>
                            <Text style={styles.subtitle}>Feel free to use it in your projects</Text>

                            <TextInput
                                style={styles.inputField}
                                placeholder="User"
                                autoCorrect={false}
                                onChangeText={setUser}
                            />

                            <TextInput
                                style={styles.inputField}
                                placeholder="Password"
                                autoCorrect={false}
                                autoComplete="password"
                                textContentType="password"
                                secureTextEntry={true}
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity
                                style={disabled ? styles.disabledLoginButton : styles.loginButton}
                                onPress={() => login()}
                                disabled={disabled}
                            >
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

export default Login;