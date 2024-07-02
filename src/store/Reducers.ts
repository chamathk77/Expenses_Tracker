const CLASS_NAME = "ExpensesTrackerReducers";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ExpensesList from "../component/ExpensesList";



const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-06-25'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-06-12'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-06-7'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-06-09'),
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-06-08'),
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18'),
    },
];




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
            state.Expenses.ExpensesList = action.payload;
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
            const id = new Date().toString() + Math.random().toString();
            const newExpense = {
                id,
                ...action.payload
            };

          
            state.Expenses.ExpensesList.push(newExpense);
        },

    },

});

export const { deleteExpenses, updateExpenses, addExpenses,setExpenses } = kycSlice.actions;



export default kycSlice.reducer;