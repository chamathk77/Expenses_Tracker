import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
import { ExpensesContext } from '../store/expenes-context';
import { getDateMinusDays } from '../../util/date';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { fetchExpenses } from '../../util/http';
import { setExpenses } from '../store/Reducers';
import { GlobalStyles } from '../../constant/styles';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import LoadingOverView from '../component/UI/LoadingOverView';
import ErrorOverlay from '../component/UI/ErrorOverlay';

function RecentExpenses({ navigation }: any) {
  const dispatch = useDispatch();

  const [fetchExpensesList, setFetchExpensesList] = useState<any>([])
  const [isfecthing, setIsfetching] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  let  expensesList:any=[]

  useFocusEffect(
   

    
    React.useCallback(() => {
      
      console.log("useFocusEffect called ------------------->Recent expenses");

      async function getExpenses() {
        setIsfetching(true)
        try {

          expensesList = await fetchExpenses()
          console.log(" recent expenses ---expensesList Recent expenses---------rrr ------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", expensesList);

          dispatch(setExpenses(expensesList))

        } catch (error) {

          setError('could not fetch expenses')
        }

        setIsfetching(false)


        // -----------------GET DATE FILTER-----------------------------

        async function fetchExpensesDate() {


          const recentExpenses = expensesList.filter((expense: any) => {

            const today = new Date();
            const date7DaysAgo = getDateMinusDays(today, 7);
            console.log("date7DaysAgo", date7DaysAgo);

            return (expense.date >= date7DaysAgo) && (expense.date <= today);

          });

          console.log("recentExpenses-------After filter------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", recentExpenses);

          setFetchExpensesList(recentExpenses)
        }

        fetchExpensesDate()

      }
      getExpenses()


    }, [navigation])
  );

  //loading screen while fetching

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

      <ExpensesOutput expenses={fetchExpensesList} expensesPeriod="Total" />

    </View>

  );
}

export default RecentExpenses;