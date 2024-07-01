import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
import { ExpensesContext } from '../store/expenes-context';
import { getDateMinusDays } from '../../util/date';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';
import { fetchExpenses } from '../../util/http';

function RecentExpenses() {

  const [fetchExpensesList, setFetchExpensesList] = useState<any>([])


  // const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  // console.log("recentExpenses", expensesList);


  useEffect(() => {
    async function getExpenses() {
      console.log("fetchExpensesList ------------->",fetchExpensesList)
      const expensesList = await fetchExpenses()
      setFetchExpensesList(expensesList)
      console.log("setFetchExpensesList ------------->",expensesList)
    }
    getExpenses()
  }, [])
  // const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = fetchExpensesList.filter((expense: any) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });


  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
    />

  );
}

export default RecentExpenses;