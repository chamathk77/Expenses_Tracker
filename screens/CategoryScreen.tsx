import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../Component/CategoryGridTile'



function renderCategoryItem(itemData: any) {

  
  return(
    <View >
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}/>
        
        

    </View>
    

    )
  
}

function CategoryScreen() {

  console.log()

    return (
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item:any)=>item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
        
      />
    )
  }


export default CategoryScreen
