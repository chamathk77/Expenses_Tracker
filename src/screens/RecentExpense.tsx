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

function RecentExpenses({ navigation }: any) {
  const dispatch = useDispatch();

  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  const [fetchExpensesList, setFetchExpensesList] = useState<any>([expensesList])
const [isfecthing, setIsfetching] = useState<boolean>(true)

  useFocusEffect(
    React.useCallback(() => {

      async function getExpenses() {
        setIsfetching(true)
        const expensesList = await fetchExpenses()
      
        console.log(" recent expenses ---expensesList------------->>>>>>>>>>>>", expensesList);
        // setFetchExpensesList(expensesList)
        dispatch(setExpenses(expensesList))
        console.log("recent expenses ---setFetchExpensesList  from db-------------------> ", expensesList)

        // -----------------GET DATE FILTER-----------------------------

        async function fetchExpensesDate() {
         

          const recentExpenses = expensesList.filter((expense: any) => {
            setIsfetching(false)
            const today = new Date();
            const date7DaysAgo = getDateMinusDays(today, 7);
            console.log("date7DaysAgo", date7DaysAgo);

            return (expense.date >= date7DaysAgo) && (expense.date <= today); 

          });

          setFetchExpensesList(recentExpenses)
        }

        fetchExpensesDate()




      }



      getExpenses()




     
    }, [navigation])
  );

  if(isfecthing){
    return <LoadingOverView/>
  }




  // console.log("recentExpenses", expensesList);
  // setFetchExpensesList(expensesList)














  // const expensesCtx = useContext(ExpensesContext);


  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <ExpensesOutput expenses={fetchExpensesList} expensesPeriod="Total" />

      {/* <TouchableOpacity style={{
        backgroundColor: GlobalStyles.colors.gray700,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        

      }}
      onPress={() => navigation.navigate('RecentExpense') }
      >
        <Text style={{ color: 'white', fontSize: 15 }}>Reload Expense</Text>

      </TouchableOpacity> */}


    </View>

  );
}

export default RecentExpenses;