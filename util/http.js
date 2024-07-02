import axios from "axios";

const BASE_URL = 'https://expensestracker-2b1ef-default-rtdb.asia-southeast1.firebasedatabase.app/'

export function storeExpense(expenseData) {
    axios.post(BASE_URL + 'expenses.json',
        expenseData)
}

export async function fetchExpenses() {
    console.log("fetchExpenses enterd")
    const response = await axios.get(BASE_URL + '/expenses.json')

    console.log("response--------------------->",response.data)

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }

        expenses.push(expenseObj)

    }
    console.log(expenses)
    return expenses
}