import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ExpensesOut from '../component/ExpensesOutput'

function RecentExpense () {

    return (
      
        <ExpensesOut expenses={undefined} expensesPeriod={"last 7 days"}/> 
      
    )
  }


export default RecentExpense
