import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../Component/CategoryGridTile'




function CategoryScreen({ navigation }) {


  function renderCategoryItem(itemData: any) {

    function pressHandler() {
      navigation.navigate('MealsOverViewScreen',{categoryId:itemData.item.id})
          
    }


    return (
      <View style={{ flex: 1}}>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler} />



      </View>


    )

  }





 

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item: any) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}

    />
  )
}


export default CategoryScreen
