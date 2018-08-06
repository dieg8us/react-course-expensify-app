import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    // Dispatch the action to edit the expense
    // Redirect to the Dashboard
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    // Dispatch the action to remove the expense
    // Redirect to the Dashboard
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <ExpenseForm
        expense={ this.props.expense }
        onSubmit={ this.onSubmit }
      />
      <button onClick={ this.onRemove } >Remove</button>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // return the object data stored in redux
  // validates the id of the expense whith the function find 
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
