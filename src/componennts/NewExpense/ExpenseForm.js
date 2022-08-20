import './ExpenseForm.css'

const ExpenseForm = () => {
  return (
      <form>
         <div className='form--controls'>
            <div className='inputs'>
               <label> TItle</label>
               <input type='text' />
            </div>
            <div className='inputs'>
               <label> Amount</label>
               <input type='number' min='0.01' step='0.01' />
            </div>
            <div className='inputs'>
               <label> Date</label>
               <input type='date' min='2019-01-01' max='2022-31-12'/>
            </div>
         </div>
         <div className='expense__buttond'>
            <button type='submit' className='btn'>Add Expense</button>
         </div>
      </form>
  )
}

export default ExpenseForm;