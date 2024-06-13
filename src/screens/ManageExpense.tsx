import React, { Component, useContext, useLayoutEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import DeleteIcon from '../component/UI/DeleteIcon'
import { GlobalStyles } from '../../constant/styles'
import Button from '../component/UI/Button'
import { ExpensesContext } from '../store/expenes-context'

function ManageExpense({ navigation, route }: any) {

  const expensesCtx = useContext(ExpensesContext)

  const editedExpense = route.params?.expenseId
  const idEditing = !!editedExpense

  useLayoutEffect(() => {
    navigation.setOptions({ title: idEditing ? "Edit expense" : "Add expenses" })
  }, [navigation])


  function deleteExpense() {
    expensesCtx.deleteExpense(editedExpense)
    Alert.alert('Delete Expense', `${editedExpense} id expenses Deleted`, [
      { text: 'Cancel', style: 'cancel' },
    ])

    navigation.goBack()


  }

  function cancelHandler() {
    navigation.goBack()

  }

  function confirmHandler() {

    if (idEditing) {
      expensesCtx.updateExpense(
        editedExpense,
        {
          description: "test-Updatedddd",
          amount: 19.99,
          date: new Date('2024-06-10')
        })

    } else {

      expensesCtx.addExpense
        ({
          description: "test-ADD",
          amount: 19.99,
          date: new Date('2024-06-10')
        })

    }


    navigation.goBack()

  }





  return (
    <View style={styles.container}>

      <View style={styles.buttons}>
        <Button
          onPress={cancelHandler}
          mode="flat"
          Style={styles.button}>Cancel</Button>

        <Button
          onPress={confirmHandler}
          Style={styles.button}
          mode={undefined}>{idEditing ? "Update" : "Confirm"}</Button>
      </View>
      {idEditing && (

        <View style={styles.deleteContainer}>
          <DeleteIcon
            onpress={deleteExpense} />
        </View>
      )}
    </View>
  )
}


export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }

})
