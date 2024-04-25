import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

function ExpensesList({expenses}) {

  function renderExpeneItem(itemData) {

    return (
      <Text>{itemData.item.description}</Text>
      )
  }

    return (
    <FlatList data={expenses} renderItem={renderExpeneItem}
    keyExtractor={(item) => item.id}
    />
    )
  }


export default ExpensesList
