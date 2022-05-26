import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

    if(props.items.length === 0) {
      return <p className='expenses-list__fallback'>No Expenses found.</p>;
    }
    
    return <ul className='expenses-list'>
        {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />
      })}
    </ul>
}

export default ExpensesList;