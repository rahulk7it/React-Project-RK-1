import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
            event.preventDefault();                             //'Page refresh' na ho iss liye hmne preventDefault() function use kiya.

        const expenseData = {
            title : enteredTitle,                              //yha hmne ek object banya, jis me hmne sare form ke 3 data ko store karya. 
            amount : enteredAmount,                            //jitne v lebel h, sb me hmne data de diya.  Ex:-title : enteredTitle
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        
        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
        return(
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>                   
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
}

export default ExpenseForm;