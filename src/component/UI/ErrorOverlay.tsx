import React, { Component } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { GlobalStyles } from '../../../constant/styles'

function ErrorOverlay({ message,onConfirm }: any) {

    const onConfirmButtonPress = () => {
        console.log("onConfirm called")
        onConfirm()
    }


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            backgroundColor: GlobalStyles.colors.primary700,
        }}
        >
            <Text style={{
                textAlign: 'center',
                marginBottom: 8,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold'
            }} >
                Something went wrong!
            </Text>

            <Text style={{
                textAlign: 'center',
                marginBottom: 8,
                color: 'white',
                fontSize: 14,


            }}>
                {message}
            </Text>

            <Button title="Okay" onPress={onConfirmButtonPress} />
        </View>
    )
}

export default ErrorOverlay

