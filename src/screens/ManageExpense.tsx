import React, { Component, useContext, useLayoutEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import DeleteIcon from '../component/UI/DeleteIcon'
import { GlobalStyles } from '../../constant/styles'
import Button from '../component/UI/Button'
// import { ExpensesContext } from '../store/expenes-context'
import { addExpenses, deleteExpenses, updateExpenses } from '../store/Reducers'
import { useDispatch, useSelector } from 'react-redux'
import ExpenseForm from '../component/ManageExpense/ExpenseForm'
import { storeExpense, UpdateExpense,DeleteExpense } from '../../util/http'
import LoadingOverView from '../component/UI/LoadingOverView'

function ManageExpense({ navigation, route }: any) {
  const dispatch = useDispatch();

  // const expensesCtx = useContext(ExpensesContext)

  const editedExpense = route.params?.expenseId
  const idEditing = !!editedExpense

  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log("idEditing Id ---------------------->",editedExpense);
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log("list ---------------------->",expensesList);

  const selectedExpense= expensesList.find((expense: any) => expense.id === editedExpense)
  console.log("selectedExpense ---------------------->",selectedExpense);



  useLayoutEffect(() => {

    navigation.setOptions({ title: idEditing ? "Edit expense" : "Add expenses" })
  }, [navigation])


  async function deleteExpense() {
    setIsSubmitting(true)
    await DeleteExpense(editedExpense)
    setIsSubmitting(false)
    dispatch(deleteExpenses(editedExpense));
    



    Alert.alert('Delete Expense', `${editedExpense} id expenses Deleted`, [
      { text: 'okey', style: 'default' },
    ])

    navigation.navigate('AllExpense')


  }

  function cancelHandler() {
    navigation.goback()

  }

  async function   confirmHandler(expenseData: any) {
    setIsSubmitting(true)

    if (idEditing) {
      dispatch(updateExpenses({
        id: editedExpense,
        data: {
          description: expenseData.description,
          date: expenseData.date,
          amount:expenseData.amount
        }
      }));
      // expensesCtx.updateExpense(
      //   editedExpense,
      //   {
      //     description: "test-Updatedddd",
      //     amount: 19.99,
      //     date: new Date('2024-06-10')
      //   })
      await UpdateExpense(editedExpense,expenseData)

    } else {
      console.log('ADD');
      const id =await storeExpense(expenseData)

      dispatch(addExpenses({
        id: id,
        description: expenseData.description,
        amount: expenseData.amount,
        date: expenseData.date

      }));

      // expensesCtx.addExpense
      //   ({
      //     description: "test-ADD",
      //     amount: 19.99,
      //     date: new Date('2024-06-10')
      //   })
      setIsSubmitting(false)

      Alert.alert('New Expensed added', '', [
        { text: 'okey', style: 'default' },
      ])

    }


    navigation.navigate('AllExpense')

  }




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


