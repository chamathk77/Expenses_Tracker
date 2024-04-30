import { createContext, useReducer, useState } from "react";

export const expensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
        case 'UPDATE':

        case 'DELETE':

        default:
            return state
    }
}
function expensesContextProvider({ children }) {
     const [expensesState, dispatch] = useReducer(expensesReducer)
    
     function addExpense(expensedata) {
        dispatch({ type: 'ADD', payload: expensedata })
    }

    function updateExpense(id, expensedata) {
        dispatch({ type: 'UPDATE', payload: { id, data: expensedata } })
    }


    function deleteExpense(id,expensedata) {
        dispatch({ type: 'DELETE', payload: id,data:expensedata })
    }


    return <expensesContext.Provider>{children}</expensesContext.Provider>

}