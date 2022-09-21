import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

const Home: React.FC = () => {
  return(
    <>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Text style={styles.title}>Welcome to Template!</Text>
                    <Text style={styles.subtitle}>Feel free to use it in your projects</Text>

                    <TextInput
                        style={styles.inputField}
                        placeholder="Login"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.inputField}
                        placeholder="Password"
                        autoCorrect={false}
                        autoComplete="password"
                        textContentType="password"
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </>
  );
}

export default Home;