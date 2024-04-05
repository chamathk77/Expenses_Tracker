import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryScreen from './screens/CategoryScreen'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './screens/MealsOverViewScreen'

const stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer >
      <stack.Navigator
        screenOptions={{
          title: "All Categories",
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25'
          },
          animationDuration: 10000
        }}>
        <stack.Screen
          name='MealsCategories'
          component={CategoryScreen}
          options={{
            title: "All Categories",
           


          }} />
        <stack.Screen 
        name='MealsOverViewScreen' 
        component={MealsOverViewScreen}
        options={{
            
        }}
        />
      </stack.Navigator>



    </NavigationContainer>

  )
}


export default App

const styles = StyleSheet.create({

})
