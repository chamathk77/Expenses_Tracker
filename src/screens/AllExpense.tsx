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
import LoadingOverView from '../component/UI/LoadingOverView';
import ErrorOverlay from '../component/UI/ErrorOverlay';

function AllExpenses() {

  const dispatch = useDispatch();
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log(expensesList);

  const [isfecthing, setIsfetching] = useState<boolean>(true)

  const [fetchdata, setfetchdata] = useState<any>(expensesList)
  const [error, setError] = useState<string | null>(null)

  useFocusEffect(
    React.useCallback(() => {
      console.log("useFocusEffect called ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>All Expenses");

      async function getExpenses() {
        setIsfetching(true)
        try {

          const expensesList = await fetchExpenses()
          console.log("all expenses- ---- expensesList ALL Expenses--------------------->", expensesList);
          setfetchdata(expensesList)
          dispatch(setExpenses(expensesList))

        } catch (error) {

          setError('could not fetch expenses')

        }
        setIsfetching(false)

      }
      getExpenses()




      return () => { };
    }, [])
  );



  if (isfecthing) {
    return <LoadingOverView />
  }

  // handle error button press
  function errorHandler() {
    setError(null)
  }


  //errot screen
  if (error !== null && !isfecthing) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }






  return (


    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <ExpensesOutput expenses={fetchdata} expensesPeriod="Total" />




    </View>

  );
}

export default AllExpenses;