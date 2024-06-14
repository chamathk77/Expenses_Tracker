import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../../constant/styles'


function Input({ label, textInputConfig ,styles}: any) {

    const inputStyles=[Styles.input];

    if (textInputConfig &&textInputConfig.multiline) {
        inputStyles.push(Styles.mutiline)
    }

    return (
        <View style={[Styles.inputContainer,styles  ]} >
            <Text style={Styles.label}> {label} </Text>
            <TextInput {...textInputConfig} style={inputStyles} />

        </View>
    )

}

export default Input

const Styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8,
       
    },
    label:{
        fontSize:14,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18
    },
    mutiline:{
        minHeight:100,
        textAlignVertical:'top'
    }
})
