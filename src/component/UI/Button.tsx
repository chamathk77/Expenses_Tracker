import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GlobalStyles } from '../../../constant/styles'

function Button ({children,onPress,mode,Style}) {

    return (
      <View style={Style}>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, mode === 'flat' ? styles.flat : null]}>
                <Text style={[styles.buttonText, mode === 'flat' ? styles.flatText : null]}> {children}</Text>
            </View>

        </TouchableOpacity>
      </View>
    )
  }


export default Button


const styles=StyleSheet.create({
    button:{
        borderRadius:6,
        padding:6,
        backgroundColor:GlobalStyles.colors.primary500
    },
    flat:{
        backgroundColor:'transparent',
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    flatText:{
        color:GlobalStyles.colors.primary200
    }

})