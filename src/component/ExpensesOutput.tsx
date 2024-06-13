import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constant/styles'

function ExpensesOut({ expenses, expensesPeriod }: any) {
    const [expensesList, setExpensesList] = useState(expenses)

    useEffect(() => {
        setExpensesList(expenses)
    }, [expenses])

    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={expenses}
                periodName={expensesPeriod}
            />
            {expensesList && expensesList.length > 0 ? (
                <ExpensesList expenses={expensesList} />
            ) : (
                <Text style={styles.noItemsText}>No items can be found</Text>
            )}
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
    noItemsText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
})
