import expensesReducers from '../../reducers/expenses';

// data
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '5' };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add a expense', () => {
  const expense = {
    id: '4',
    description: 'Test',
    note: '',
    amount: 265,
    createdAt: 0
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const amount = 200000;
  const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount }};
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if not found', () => {
  const amount = 200000;
  const action = { type: 'EDIT_EXPENSE', id: 27, updates: { amount }};
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = { type: 'SET_EXPENSES', expenses: [expenses[1]] };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses[1]);
})
