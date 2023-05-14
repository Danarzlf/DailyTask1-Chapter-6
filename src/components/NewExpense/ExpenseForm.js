import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredStock, setEnteredStock] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const stockChangeHandler = (event) => {
    setEnteredStock(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const imageURLChangeHandler = (event) => {
    setEnteredImageURL(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      description: enteredDescription,
      stock: enteredStock,
      imageURL: enteredImageURL,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredStock("");
    setEnteredImageURL("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>ADD PRODUCT</h1>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name Product</label>
          <div>
            <img src={require("../image/product.png")} />
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} placeholder="Book" />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <div>
            <img src={require("../image/price.png")} />
            <input type="number" min="0.5" step="0.5" value={enteredAmount} onChange={amountChangeHandler} placeholder="$70.5" />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <div>
            <img src={require("../image/date.png")} />
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <div>
            <img src={require("../image/description.png")} />
            <input type="text" value={enteredDescription} onChange={descriptionChangeHandler} placeholder="This book provides practical knowledge" />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Stock</label>
          <div>
            <img src={require("../image/stock.png")} />
            <input type="number" min="1" step="1" value={enteredStock} onChange={stockChangeHandler} placeholder="100" />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Image</label>
          <div>
            <img src={require("../image/image.png")} />
            <input type="file" accept=".jpg,.png,.jpeg" value={enteredImageURL} onChange={imageURLChangeHandler} />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ExpenseForm;