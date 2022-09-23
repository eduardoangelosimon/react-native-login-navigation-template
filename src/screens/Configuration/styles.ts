import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from '../../themes/colors'

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(15),
        borderBottomColor: COLORS.gray200,
        borderTopColor: COLORS.gray200,
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontSize: RFValue(16),
    },
    buttonSubText: {
        color: COLORS.gray200
    },
    buttonIcon: {
        height: RFValue(10),
        width: RFValue(10),
    },
})

export default styles