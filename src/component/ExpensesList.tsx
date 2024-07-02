import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
// import ExpeneItem from './ExpeneItem'
import ExpenesItem from './ExpeneItem'
import { toGammaSpace } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

function ExpensesList({expenses}: any) {

  function renderExpeneItem(itemData: any) {

    console.log('renderExpeneItem date-------------->>>>>',itemData.item.date);

    return (
      <ExpenesItem id={itemData.item.id} description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.date}/>
      )
  }

    return (
    <FlatList data={expenses} renderItem={renderExpeneItem}
    keyExtractor={(item) => item.id}
    />
    )
  }


export default ExpensesList
