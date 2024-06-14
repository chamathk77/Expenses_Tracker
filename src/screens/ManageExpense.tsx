import React, { Component, useContext, useLayoutEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import DeleteIcon from '../component/UI/DeleteIcon'
import { GlobalStyles } from '../../constant/styles'
import Button from '../component/UI/Button'
// import { ExpensesContext } from '../store/expenes-context'
import { addExpenses, deleteExpenses, updateExpenses } from '../store/Reducers'
import { useDispatch } from 'react-redux'
import ExpenseForm from '../component/ManageExpense/ExpenseForm'

function ManageExpense({ navigation, route }: any) {
  const dispatch = useDispatch();

  // const expensesCtx = useContext(ExpensesContext)

  const editedExpense = route.params?.expenseId
  const idEditing = !!editedExpense

  useLayoutEffect(() => {

    navigation.setOptions({ title: idEditing ? "Edit expense" : "Add expenses" })
  }, [navigation])


  function deleteExpense() {
    dispatch(deleteExpenses(editedExpense));
    
    

    Alert.alert('Delete Expense', `${editedExpense} id expenses Deleted`, [
      { text: 'okey', style:'default' },
    ])

    navigation.goBack()


  }

  function cancelHandler() {
    navigation.goBack()

  }

  function confirmHandler() {

    if (idEditing) {
      dispatch(updateExpenses({
        id: editedExpense,
        data: { description: "test-Updatedddd****",  date: new Date('2024-06-10') }
      }));
      // expensesCtx.updateExpense(
      //   editedExpense,
      //   {
      //     description: "test-Updatedddd",
      //     amount: 19.99,
      //     date: new Date('2024-06-10')
      //   })

    } else {
      console.log('ADD');

      dispatch(addExpenses({
        description: "test-ADD***********",
        amount: 19.99,
        date: new Date('2024-06-10')
        
      }));

      // expensesCtx.addExpense
      //   ({
      //     description: "test-ADD",
      //     amount: 19.99,
      //     date: new Date('2024-06-10')
      //   })

      Alert.alert('New Expensed added', '', [
        { text: 'okey', style:'default' },
      ])

    }


    navigation.goBack()

  }





  return (
    <View style={styles.container}>
      <ExpenseForm />


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
    marginTop: 10
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
    
  }

})


