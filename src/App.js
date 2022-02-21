import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
    {
        id : 'e1',
        title : 'School Fee',
        amount : 250,
        date : new Date(2022, 0, 18)
    },

    {
        id : 'e1',
        title : 'Electicity Bill',
        amount : 50,
        date : new Date(2022, 0, 30)
    },

    {
        id : 'e1',
        title : 'Books',
        amount : 175,
        date : new Date(2022, 0, 8)
    },

    {
        id : 'e1',
        title : 'House Rent',
        amount : 425,
        date : new Date(2022, 0, 19)
    },
]

function App(){    
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    // fetch('https://reqres.in/api/users?page=2').then(
    //     response => {
    //         return response.json();
    //     }
    // ).then(
    //     data =>{
    //         console.log(data);
    //         setExpenses(data);
    //     }
    // )

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense);
    };
    return(
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses item={expenses} />
        </div>
    );
}



export default App;

