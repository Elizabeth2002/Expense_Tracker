import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpenseChart from './components/Expenses/ExpenseChart';

import { useState } from "react";


function App() {

  const DUMMY_EXPENSE = [{
    id: 1,
    title: 'Car Insurance',
    amount: '234',
    date: new Date(2021, 3, 6)
  }, {
    id: 2,
    title: 'Grocery',
    amount: '45',
    date: new Date(2020, 4, 5)
  }, {
    id: 3,
    title: 'Petrol',
    amount: '54',
    date: new Date(2021, 11, 7)
  }, {
    id: 4,
    title: 'Rent',
    amount: '87',
    date: new Date(2022, 5, 23)
  }];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpense = (expense) => {
    setExpenses(prev => {
      return [...prev, expense];
    });
  }

  return (
    <div>
      <NewExpense addNewExpense={addExpense}/>

      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
