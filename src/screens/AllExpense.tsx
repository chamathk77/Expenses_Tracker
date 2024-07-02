import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
// import { ExpensesContext } from '../store/expenes-context';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { fetchExpenses } from '../../util/http';
import { setExpenses } from '../store/Reducers';
import { GlobalStyles } from '../../constant/styles';

function AllExpenses() {

  const dispatch = useDispatch();
  // const expensesCtx = useContext(ExpensesContext);

  const [fetchdata, setfetchdata] = useState<any>([])
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log(expensesList);

  useEffect(() => {
    async function getExpenses() {
      const expensesList = await fetchExpenses()
      console.log("expensesList ALL Expenses--------------------->", expensesList);
      setfetchdata(expensesList)
      dispatch(setExpenses(expensesList))
      console.log("setExpensesList  from db------------------->", expensesList)
    }
    getExpenses()

  }, [])


  return (


    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <ExpensesOutput expenses={expensesList} expensesPeriod="Total" />




    </View>

  );
}

export default AllExpenses;