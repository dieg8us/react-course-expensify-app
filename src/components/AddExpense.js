// libs
import React from 'react';
import { connect } from 'react-redux';
// form
import ExpenseForm from './ExpenseForm';
// action
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    // add to redux store
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    // redirect to dashboard
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
