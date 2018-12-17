// selector
import getExpensesTotal from '../../selectors/expenses-total.js';

// data
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => { 
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => { 
  const total = getExpensesTotal([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});

test('should correctly add up a multiple expenses', () => {
  const totalAmount = expenses[0].amount + expenses[1].amount; 
  const total = getExpensesTotal([expenses[0], expenses[1]]);
  expect(total).toBe(totalAmount);
});