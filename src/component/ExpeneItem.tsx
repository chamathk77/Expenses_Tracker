import React, { Component } from 'react'
import { Pressable, StyleSheet, Text, TextBase, TouchableOpacity, View } from 'react-native'
import { GlobalStyles } from '../../constant/styles'
// import { getFormattedDate } from '../../util/date'
import { useNavigation } from '@react-navigation/native'

function ExpenesItem({ id,description, amount, date }: any) {
    const navigation = useNavigation();


    const parsedDate = new Date(date);
    const formattedDate = `${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;

    function expensePressHandler() {
        navigation.navigate('ManageExpense', { expenseId: id })

        
    }

    


    return (

        <TouchableOpacity onPress={expensePressHandler}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{formattedDate}</Text>
                </View>


                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}

export default ExpenesItem

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80

    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'


    }
})
