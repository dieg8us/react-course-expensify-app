import uuid from "uuid";
import database from "../firebase/firebase";

// Add expense
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    // save data
    return database.ref("expenses").push(expense).then(ref => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// Remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Edit expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// Set Expenses 
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = { }; 