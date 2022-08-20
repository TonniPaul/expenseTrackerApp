import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
   const [enteredTitle, setEnteredTitle] = 'useState';
   const titleHandlerChange = (event) => {
      console.log(event.target.value)
   }
   const [enteredAmount, setEnteredAmount] = 'useState';
   const amountHandlerChange = (event) => {
      console.log(event.target.value)
   }
   const [enteredDate, setEnteredDate] = 'useState';
   const dateHandlerChange = (event) => {
      console.log(event.target.value)
   }
  return (
      <form>
         <div className='form--controls'>
            <div className='inputs'>
               <label> TItle</label>
               <input type='text' onChange={ titleHandlerChange }/>
            </div>
            <div className='inputs'>
               <label> Amount</label>
               <input type='number' min='0.01' step='0.01' onChange={ amountHandlerChange }/>
            </div>
            <div className='inputs'>
               <label> Date</label>
               <input type='date' min='2019-01-01' max='2022-31-12' onChange={ dateHandlerChange }/>
            </div>
         </div>
         <div className='expense__buttond'>
            <button type='submit' className='btn'>Add Expense</button>
         </div>
      </form>
  )
}

export default ExpenseForm;