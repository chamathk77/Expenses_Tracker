import React, { Component, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Button from '../UI/Button'
import { GlobalStyles } from '../../../constant/styles'

function ExpenseForm(this: any, { onCancel, onSubmit, SubmitButtonLabel, defaultValue }: any) {
  const [Inputs, setInput] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid:true ,


    },
    date: {
      value: defaultValue ? defaultValue.date.toISOString().slice(0, 10) : '',
      isValid: true

    },
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: true
    }
  })
  function InputChangedHandler(InputIdentifier: any, enteredValue: any) {
    setInput((CurrentInput: any) => {
      return {
        ...CurrentInput,
        [InputIdentifier]: {
          value: enteredValue,
          isValid: true
        }
      }
    })
  }

  function SubmitHandler() {
    const expenseData = {
      amount: +Inputs.amount.value,
      date: new Date(Inputs.date.value),
      description: Inputs.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
     
      setInput((curInputs: any) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid
          }
          ,
          date: {
            value: curInputs.date.value,
            isValid: dateIsValid
          },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid
          }

        }
      })
      return
    }


    onSubmit(expenseData)

    console.log('check',!Inputs.amount.isValid,Inputs.amount.isValid);
  }

  const formIsValid = !Inputs.amount.isValid || !Inputs.date.isValid || !Inputs.description.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Input
          label="Amount"
          invalid={!Inputs.amount.isValid}
          styles={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: InputChangedHandler.bind(this, 'amount'),
            value: Inputs.amount.value


          }}

        />

        <Input
          label="Date"
          invalid={!Inputs.date.isValid}
          textInputConfig={{
            keyboardType: 'default',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: InputChangedHandler.bind(this, 'date'),
            value: Inputs.date.value
            // onChangeText:{}

          }}
          styles={styles.rowInput}
        />

      </View>


      <Input
        label="Description"
        invalid={!Inputs.description.isValid}
        textInputConfig={{
          keyboardType: 'default',
          multiline: true,
          autoCapitalize: 'sentences',
          onChangeText: InputChangedHandler.bind(this, 'description'),
          value: Inputs.description.value
          // numberOfLines: 3,
          // autocorrect: false
          // onChangeText:{}


        }} />

      {formIsValid ? <Text  style={{textAlign:'center',color:GlobalStyles.colors.error500,marginTop:10,}}>Invalid Input Values - Please check your entered data</Text> : null}
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
