import React, { Component, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeleteIcon from '../component/UI/DeleteIcon'
import { GlobalStyles } from '../../constant/styles'
import Button from '../component/UI/Button'

function ManageExpense({ navigation, route }) {

  const editedExpense = route.params?.expenseId
  const idEditing = !!editedExpense

  useLayoutEffect(() => {
    navigation.setOptions({ title: idEditing ? "Edit expense" : "Add expenses" })
  }, [navigation])


  function deleteExpense() {

    navigation.goBack()

  }

  function cancelHandler() {
    navigation.goBack()

  }

  function confirmHandler() {
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
  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    minWidth: 120,
    marginHorizontal: 8
  }
  
})
