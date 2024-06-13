import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constant/styles'
function ExpensesOut({ expenses, expensesPeriod }:any) {

    // const Dummy_Expenses = [
 
        

    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={expenses}
                periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />


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
