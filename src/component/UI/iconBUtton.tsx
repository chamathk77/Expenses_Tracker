import { Image, StyleSheet, TouchableOpacity, View } from "react-native"


function IconButton({onPress}:any) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
            <Image source={require('../../../assets/images/plus.png')} style={{width:45,height:45,tintColor:"white"}} />
            </View>
        </TouchableOpacity>
    )

}

export default IconButton

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