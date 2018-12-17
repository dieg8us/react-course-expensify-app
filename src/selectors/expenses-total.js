// get total amount from array of expenses
const getExpensesTotal = (expenses) => {
  return expenses
          .map(expense => expense.amount)
          .reduce((prev, next) => prev + next, 0);
}

export {
  getExpensesTotal as default
};