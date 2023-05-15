import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h3>Stock : {props.stock}</h3>
          <img src={props.imageURL} />
          <div className="expense-item__price">${props.amount}</div>
          <div>
            <h3>Product Availability</h3>
            <label className="switch">
              <input type="checkbox" checked={props.isAvailable} readOnly />
              <span className="slider"></span>
            </label>
            <p>{props.isAvailable ? "Available" : "Not Available"}</p>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;