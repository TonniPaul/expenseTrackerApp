import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const titleHandlerChange = (event) => {
      setEnteredTitle(event.target.value)
   }
   const [enteredAmount, setEnteredAmount] = useState();
   const amountHandlerChange = (event) => {
      setEnteredAmount(event.target.value)
   }
   const [enteredDate, setEnteredDate] = useState();
   const dateHandlerChange = (event) => {
      setEnteredDate(event.target.value)
   }

   // =========SUBMIT ACTION HANDLER ==========
   const submitHandler = (event) => {
      event.preventDefault();

      const inputData ={
      title: enteredTitle,
      amount: enteredAmount,
      date : new Date(enteredDate)
      };

      console.log(inputData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('')
   };
   
  return (
      <form onSubmit={submitHandler}>
         <div className='form--controls'>
            <div className='inputs'>
               <label> TItle</label>
               <input 
                  type='text' 
                  value= { enteredTitle }
                  onChange={ titleHandlerChange }
               />
            </div>
            <div className='inputs'>
               <label> Amount</label>
               <input 
                  type='number' 
                  min='0.01' step='0.01' 
                  value={enteredAmount}
                  onChange={ amountHandlerChange }
               />
            </div>
            <div className='inputs'>
               <label> Date</label>
               <input 
                  type='date' 
                  min='2019-01-01'
                  max='2022-31-12' 
                  value={enteredDate}
                  onChange={ dateHandlerChange }
               />
            </div>
         </div>
         <div className='expense__buttond'>
            <button type='submit' className='btn'>Add Expense</button>
         </div>
         
      </form>
  )
}

export default ExpenseForm;