import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ExpeneItem from './ExpeneItem'

function ExpensesList({expenses}) {

  function renderExpeneItem(itemData) {

    return (
      <ExpeneItem {...itemData.item}/>
      )
  }

    return (
    <FlatList data={expenses} renderItem={renderExpeneItem}
    keyExtractor={(item) => item.id}
    />
    )
  }


export default ExpensesList
