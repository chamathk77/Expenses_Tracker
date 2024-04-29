import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ExpensesOut from '../component/ExpensesOutput'

function AllExpense () {
 
    return (
      <ExpensesOut expenses={undefined} expensesPeriod={"total"}/>
    )
  }

export default AllExpense
