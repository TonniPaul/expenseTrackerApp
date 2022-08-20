import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Cards from '../UI/Cards';


const NewExpense = () => {
  return (
    <Cards className='forms'>
      <ExpenseForm/>
    </Cards>
  )
}

export default NewExpense;