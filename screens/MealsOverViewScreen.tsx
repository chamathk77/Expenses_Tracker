import React, { Component, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../Component/MealItem'
function MealsOverViewScreen({ route, navigation }) {
    const CatId = route.params.categoryId

    const displayMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(CatId) >= 0
    })

    useEffect(() => {
        const categoryTitle=CATEGORIES.find((category)=>{return category.id===CatId}).title


        navigation.setOptions({
            title:categoryTitle
        })
        
    },[CatId,navigation])
    
    function renderMealItem(itemData) {
        const item=itemData.item

        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability
        }
        return (
            <MealItem {...mealItemProps} />

        )

    }




    return (
        <View>
            <FlatList
                data={displayMeals}
                keyExtractor={(meal) => meal.id}
                renderItem={renderMealItem} />
        </View>
    )
}


export default MealsOverViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image:{
        width:'100%',
        height:'100%'

    }
})
