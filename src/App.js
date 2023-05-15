import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book',
    description : "book for important notes", 
    amount: 5.5,
    stock : 100,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'Televition', 
    description : "television for daily entertainment",  
    amount: 199.49, 
    stock : 100 ,  
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Pen',
    description : "pen to write important notes", 
    amount: 9.67,
    stock : 100,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'Sofa',
    title: 'New Desk (Wooden)',
    description : "Sofa to sit relaxed", 
    amount: 40,
    stock : 100,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //prevExpenses = data dummy
  // return [expense, ...prevExpenses];
  //jadi menampilkan data baru expenses dulu baru data awal/dummy

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
