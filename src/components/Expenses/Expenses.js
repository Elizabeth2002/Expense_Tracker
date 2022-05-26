import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [filter, setFilter] = useState('2020');

    const filteredItems = props.expenses.filter((item) => item.date.getFullYear().toString() === filter);

    const optionChange = (value) => {
      setFilter(value)
    }


    return <Card className="expenses">
      <ExpensesFilter filter={filter} valueChange={optionChange}/>
      <ExpenseChart expenses={filteredItems}/>

      <ExpensesList items={filteredItems}/>
    </Card>
}

export default Expenses;