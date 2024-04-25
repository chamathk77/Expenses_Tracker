import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
function ExpensesOut({ expenses, expensesPeriod }) {

    const Dummy_Expenses = [
        {
            id: 'e1',
            description: 'A pair of shoes',
            amount: 59.99,
            date: new Date('2022-12-12'),
        },
        {
            id: 'e2',
            description: 'A pair of trousers',
            amount: 89.29,
            date: new Date('2022-12-13'),
        },
        {
            id: 'e3',
            description: 'Some bananas',
            amount: 5.99,
            date: new Date('2022-12-14'),
        },{
            id: 'e4',
            description: 'A book',
            amount: 14.99,
            date: new Date('2022-12-15'),
        }
    ]
        

    return (
        <View>
            <ExpensesSummary
                expenses={Dummy_Expenses}
                periodName={expensesPeriod} />
            <ExpensesList expenses={Dummy_Expenses} />


        </View>
    )
}

export default ExpensesOut
