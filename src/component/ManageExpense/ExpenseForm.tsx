import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Button from '../UI/Button'

function ExpenseForm({ onCancel, onSubmit, SubmitButtonLabel }: any) {
  const [InputValues, setInputValue] = useState({
    amount: '',
    date: '',
    description: ''
  })
  function InputChangedHandler(InputIdentifier: any, enteredAmount: any) {
    setInputValue((CurrentInputValues: any) => {
      return {
        ...CurrentInputValues,
        [InputIdentifier]: enteredAmount
      }
    })
  }

  function SubmitHandler() {
    const expenseData = {
      amount: +InputValues.amount,
      date:new Date( InputValues.date),
      description: InputValues.description
    }

    onSubmit(expenseData)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Input
          label="Amount"
          styles={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: InputChangedHandler.bind(this, 'amount'),
            value: InputValues.amount


          }}

        />

        <Input
          label="Date"
          textInputConfig={{
            keyboardType: 'default',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: InputChangedHandler.bind(this, 'date'),
            value: InputValues.date
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
          onChangeText: InputChangedHandler.bind(this, 'description'),
          value: InputValues.description
          // numberOfLines: 3,
          // autocorrect: false
          // onChangeText:{}


        }} />

      <View style={styles.buttons}>
        <Button
          onPress={onCancel}
          mode="flat"
          Style={styles.button}>Cancel</Button>

        <Button
          onPress={SubmitHandler}
          Style={styles.button}
          mode={undefined}>
          {SubmitButtonLabel}

        </Button>
      </View>


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
