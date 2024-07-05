import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { GlobalStyles } from '../../../constant/styles'

function LoadingOverView() {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            backgroundColor: GlobalStyles.colors.primary700,
        }}
        >
            <ActivityIndicator size="large" color={'white'} />
        </View>
    )
}

export default LoadingOverView

