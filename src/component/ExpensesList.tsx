import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
// import ExpeneItem from './ExpeneItem'
import ExpenesItem from './ExpeneItem'

function ExpensesList({expenses}: any) {

  function renderExpeneItem(itemData: any) {

    console.log('renderExpeneItem',itemData.item.id);

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
