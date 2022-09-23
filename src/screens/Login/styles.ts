import { StyleSheet, Text, View } from "react-native";
import { COLORS } from '../../themes/colors'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 25,
        marginBottom: 15,
        color: COLORS.black
    },
    subtitle: {
        color: COLORS.gray300,
        marginBottom: 30
    },
    loginContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        backgroundColor: COLORS.gray100,
        padding: 20,
        width: '100%',
        borderRadius: 10,
        marginBottom: 15
    },
    disabledLoginButton:{
        backgroundColor: COLORS.purple,
        padding: 20,
        width: '100%',
        alignItems:'center',
        borderRadius: 10,
        opacity: 0.5
    },
    loginButton: {
        backgroundColor: COLORS.purple,
        padding: 20,
        width: '100%',
        alignItems:'center',
        borderRadius: 10
    },
    loginText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default styles