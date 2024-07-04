const CLASS_NAME = "ExpensesTrackerReducers";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ExpensesList from "../component/ExpensesList";



const DUMMY_EXPENSES: Array<any> = []




// KYC2 screen
const ExpensesInitialState = {
    ExpensesList: DUMMY_EXPENSES 

};


export const kycSlice = createSlice({
    name: 'ExpensesTracker',
    initialState: {
        Expenses: ExpensesInitialState,



    },
    reducers: {
        setExpenses: (state, action) => {
            console.log('setExpenses Reducer  -test---------->>>>>>>>>', action.payload);
            state.Expenses.ExpensesList = action.payload.reverse();
        },
        deleteExpenses: (state, action) => {
            const idToDelete = action.payload;
            console.log('deleteExpenses ', idToDelete);
            
            state.Expenses.ExpensesList = state.Expenses.ExpensesList.filter(expense => expense.id !== idToDelete);
          },


        updateExpenses: (state, action) => {
            const { id, data } = action.payload;
            const index = state.Expenses.ExpensesList.findIndex(expense => expense.id === id);
            if (index !== -1) {
                state.Expenses.ExpensesList[index] = {
                    ...state.Expenses.ExpensesList[index],
                    ...data,
                };
            }
        },
        addExpenses: (state, action) => {
            console.log('addExpenses', action.payload);
            
            const newExpense =action.payload
            

          
            state.Expenses.ExpensesList.push(newExpense);
        },

    },

});

export const { deleteExpenses, updateExpenses, addExpenses,setExpenses } = kycSlice.actions;



export default kycSlice.reducer;0