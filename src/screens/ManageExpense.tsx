import React, { Component, useContext, useLayoutEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import DeleteIcon from '../component/UI/DeleteIcon'
import { GlobalStyles } from '../../constant/styles'
import Button from '../component/UI/Button'
// import { ExpensesContext } from '../store/expenes-context'
import { addExpenses, deleteExpenses, updateExpenses } from '../store/Reducers'
import { useDispatch, useSelector } from 'react-redux'
import ExpenseForm from '../component/ManageExpense/ExpenseForm'
import { storeExpense, UpdateExpense, DeleteExpense } from '../../util/http'
import LoadingOverView from '../component/UI/LoadingOverView'
import ErrorOverlay from '../component/UI/ErrorOverlay'

function ManageExpense({ navigation, route }: any) {
  const dispatch = useDispatch();


  //check when manage expense clicked with id as params or not

  const editedExpense = route.params?.expenseId
  const idEditing = !!editedExpense

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  console.log("idEditing Id ---------------------->", editedExpense);
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log("list ---------------------->", expensesList);

  const selectedExpense = expensesList.find((expense: any) => expense.id === editedExpense)
  console.log("selectedExpense ---------------------->", selectedExpense);



  useLayoutEffect(() => {

    navigation.setOptions({ title: idEditing ? "Edit expense" : "Add expenses" })
  }, [navigation])

  //delete expense 
  async function deleteExpense() {

    setIsSubmitting(true)

    try {

      await DeleteExpense(editedExpense)

      dispatch(deleteExpenses(editedExpense));

      Alert.alert('Deleted Expenses.\n', `id number : ${editedExpense} `, [
        { text: 'okey', style: 'default' },
      ])
      setTimeout(() => {

        navigation.navigate('AllExpense')
      }, 1000);


    } catch (error) {
      setError('could not delete expenses - please try again later !')
      setIsSubmitting(false)

    }


  }

  function cancelHandler() {
    navigation.goback()

  }

  //edite and update expense

  async function confirmHandler(expenseData: any) {
    setIsSubmitting(true)

    try {

      if (idEditing) {
        dispatch(updateExpenses({
          id: editedExpense,
          data: {
            description: expenseData.description,
            date: expenseData.date,
            amount: expenseData.amount
          }
        }));
        //api calling
        await UpdateExpense(editedExpense, expenseData)

        Alert.alert('Expense Updated Successfully.\nid number : ' + editedExpense, '', [
          { text: 'okey', style: 'default' },
        ])

        navigation.navigate('AllExpense')


      } else {
        console.log('adding new expenses');
        //api calling
        const id = await storeExpense(expenseData)

        dispatch(addExpenses({
          id: id,
          description: expenseData.description,
          amount: expenseData.amount,
          date: expenseData.date

        }));




        Alert.alert('New Expensed added', '', [
          { text: 'okey', style: 'default' },
        ])

        navigation.navigate('AllExpense')

      }

    } catch (error) {

      setError('could not save expenses - please try again later !')
      setIsSubmitting(false)

    }






  }

  // handle error button press
  function errorHandler() {
    setError(null)
  }


  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }



  //loading screen while submitting
  if (isSubmitting) {
    return <LoadingOverView />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        SubmitButtonLabel={idEditing ? "Update" : "Add"}
        defaultValue={selectedExpense}
      />



      {/* delet button appear only editing  */}

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


