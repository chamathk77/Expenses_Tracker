import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

function MealDetails({ duration, complexity, affordability }) {

    return (
        <View style={styles.detail}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>

        </View>
    )
}


export default MealDetails

const styles=StyleSheet.create({

    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
   
