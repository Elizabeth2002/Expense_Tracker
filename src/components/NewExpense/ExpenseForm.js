import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [formVisible, setFormVisisble] = useState(false);

    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChange = (event) => {
     setExpense({
         ...expense,
         title: event.target.value
     });
    }

    const amountChange = (event) => {
     setExpense({
         ...expense,
         amount: event.target.value
     });
    }

    const dateChange = (event) => {
        setExpense({
            ...expense,
            date: new Date(event.target.value)
        });
    }

    
    const submitHandler = (event) => {
        event.preventDefault();
        setFormVisisble(false)
        props.onDataSubmit(expense);
    }

    const addNewExpenseHandler = () => {
        setFormVisisble(true);
    }

    const cancelHandler = () => {
        setFormVisisble(false);
    }
   
    return <form onSubmit={submitHandler}>
        {formVisible ?  
        (<div>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>) : (
            <div>
                <button type='submit' onClick={addNewExpenseHandler}>Add New Expense</button>
            </div>
        )}       
    </form>
}

export default ExpenseForm;