import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { GlobalStyles } from "../../../constant/styles"

function DeleteIcon({onpress}) {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.buttonContainer}>
            <Image source={require('../../../assets/images/delete.png')} style={{width:45,height:45,tintColor:GlobalStyles.colors.error500}} />
            </View>
        </TouchableOpacity>
    )

}

export default DeleteIcon

const styles=StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        margin:8,
    },
    pressed:{
        opacity:0.75
    }
})