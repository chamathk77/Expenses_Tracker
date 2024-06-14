import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'

function ExpenseForm() {
  function AmountChangeHandler() {

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad'
          }}
          onChangeText={AmountChangeHandler}
          styles={styles.rowInput}
        />

        <Input
          label="Date"
          textInputConfig={{
            keyboardType: 'default',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10
            // onChangeText:{}

          }}
          styles={styles.rowInput}
        />

      </View>


      <Input
        label="Description"
        textInputConfig={{
          keyboardType: 'default',
          multiline: true,
          autoCapitalize: 'sentences',
          // numberOfLines: 3,
          // autocorrect: false
          // onChangeText:{}


        }} />



    </View>


  )

}

export default ExpenseForm

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  form: {
    marginTop: 40
  },
  rowInput: {
    flex: 1

  }
})
