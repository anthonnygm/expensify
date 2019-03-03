import React from 'react';
import {Link} from 'react-router-dom';
import * as moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`} />
        <h3>{description}</h3>
        <p>
            {numeral(amount / 100).format('R$0.0,00')}-
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

/**
 * import {connect} from 'react-redux';
 * import {removeExpense} from '../actions/expenses';
 * , dispatch
 * export default connect()(ExpenseListItem);
 * <button onClick={() => { dispatch(removeExpense({id})); }} >
 * Remove
 * </button>
 */
export default ExpenseListItem;
