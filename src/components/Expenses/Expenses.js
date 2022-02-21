import React from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props){
    return(
        <Card className='expenses'>

            {
                props.item.map(
                    expense => (                                //doubt {} in the place of (). arrow function.
                    <ExpenseItem 
                        // key={expense.id}
                        date={expense.date} 
                        title={expense.title} 
                        amount={expense.amount} />
                    )   
                )
            }
        </Card>
    );
}

export default Expenses;