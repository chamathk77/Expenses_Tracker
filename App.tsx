import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryScreen from './screens/CategoryScreen'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'


function App() {
  return (
    <View style={{flex:1,backgroundColor:"#31363F"}}>
      <CategoryScreen/>
    </View>
    )
    }


export default App

const styles = StyleSheet.create({
  
})
