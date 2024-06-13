import { useContext } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
// import { ExpensesContext } from '../store/expenes-context';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';
function AllExpenses() {
  // const expensesCtx = useContext(ExpensesContext);
  const expensesList = useSelector((state: any) => state.ExpensesDetails.Expenses.ExpensesList)
  console.log(expensesList);
  

  return (
    <ExpensesOutput expenses={expensesList} expensesPeriod="Total" />
    
  );
}

export default AllExpenses;