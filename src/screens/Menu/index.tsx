import React from 'react';
import { Image, SafeAreaView, Switch, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../themes/colors';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import session, { logoutSuccess } from '../../redux/session/reducer';



const Menu: React.FC = ({navigation}: any) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutSuccess())
    }
    
  return (
    <>
        <SafeAreaView>
        <View style={styles.container}>
              <View
                
              >
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Configuration")}}> 
                    <Text style={styles.buttonText}>Configuration</Text>
                </TouchableOpacity> 
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={logout}
              >
                <Text style={styles.buttonText}>Logout</Text>
                <Icon name='sign-out' size={30} color={COLORS.gray200}/>
              </TouchableOpacity>
              </View>
            
        </SafeAreaView>
    </>
  );
}

export default Menu;