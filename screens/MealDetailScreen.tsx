import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../models/MealDetails'

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View>
      {/* <Image source={selectedMeal.imageUrl}  /> */}
      <Text>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability} />
      <Text>ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return (
          <Text key={ingredient}>{ingredient}</Text>
        )
      })}

      <Text>steps</Text>
      {selectedMeal?.steps.map((steps) => {
        return (
          <Text key={steps}>{steps}</Text>
        )
      })}



    </View>
  )
}


export default MealDetailScreen
