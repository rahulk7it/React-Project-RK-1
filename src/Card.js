import React from 'react';
import ExpenseDate from './components/Expenses/ExpenseDate';
import './Card.css';

const Card = (props) => {
        const classes = 'card ' + props.className;
        return <div className={classes}>{props.children}</div>
}

export default Card;