import uuid from "uuid";
import database from "../firebase/firebase";

// Add expense
const addExpense = expense => ({
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
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Edit expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export { addExpense, removeExpense, editExpense };
