import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const dataSubmitHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.addNewExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onDataSubmit={dataSubmitHandler}/>
    </div>
}

export default NewExpense;