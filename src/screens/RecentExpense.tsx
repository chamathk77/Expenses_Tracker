import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ExpensesOut from './component/ExpensesOutput'

function RecentExpense () {

    return (
      <View>
        <Text><ExpensesOut expenses={undefined} expensesPeriod={"last 7 days"}/> </Text>
      </View>
    )
  }


export default RecentExpense
