import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constant/styles'
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
            amount: 24.99,
            date: new Date('2022-12-15'),
        },
        {
            id: 'e5',
            description: 'A pair of shoes',
            amount: 59.99,
            date: new Date('2022-12-12'),
        },
        {
            id: 'e6',
            description: 'A pair of trousers',
            amount: 89.29,
            date: new Date('2022-12-13'),
        },
        {
            id: 'e7',
            description: 'Some bananas',
            amount: 5.99,
            date: new Date('2022-12-14'),
        },
        {
            id: 'e8',
            description: 'A book',
            amount: 24.99,
            date: new Date('2022-12-15'),
        }
    ]
        

    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={Dummy_Expenses}
                periodName={expensesPeriod} />
            <ExpensesList expenses={Dummy_Expenses} />


        </View>
    )
}

export default ExpensesOut
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
})
