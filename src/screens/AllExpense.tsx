import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
// import { ExpensesContext } from '../store/expenes-context';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { fetchExpenses } from '../../util/http';
import { setExpenses } from '../store/Reducers';
import { GlobalStyles } from '../../constant/styles';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

function AllExpenses() {

  const dispatch = useDispatch();
  // const expensesCtx = useContext(ExpensesContext);

 
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log(expensesList);

  const [fetchdata, setfetchdata] = useState<any>(expensesList)

  useFocusEffect(
    React.useCallback(() => {
      console.log("useFocusEffect called ------------------->All Expenses");

      async function getExpenses() {
        const expensesList = await fetchExpenses()
        console.log("all expenses- ---- expensesList ALL Expenses--------------------->", expensesList);
        setfetchdata(expensesList)
        dispatch(setExpenses(expensesList))
        console.log("all expenses- ----setExpensesList  from db------------------->", expensesList)
      }
      getExpenses()

      
      
      
      return () => {};
    }, [])
  );




  return (


    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <ExpensesOutput expenses={fetchdata} expensesPeriod="Total" />




    </View>

  );
}

export default AllExpenses;