import { useContext } from 'react';

import ExpensesOutput from '../component/ExpensesOutput';
import { ExpensesContext } from '../store/expenes-context';
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
  );
}

export default AllExpenses;