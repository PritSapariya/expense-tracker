import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer';

const initialState = [
    //{amount: 50, type: "Expense", category: "Bills", date: "2021-08-06", id: "ea85f938-998e-448b-a9b6-a4bb5ecdb0d0"},
    //{amount: 150, type: "Income", category: "Investments", date: "2021-08-04", id: "339dcc3d-b99a-4197-b329-f75dd7f996e3"}
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creaters
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction, 
            addTransaction, 
            transactions
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
} 