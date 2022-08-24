import ExpenseItem from './componennts/Expenses/ExpenseItem';
import { expenses } from './componennts/Expenses/expenses';
import Cards from './componennts/UI/Cards';
import NewExpense  from './componennts/NewExpense/NewExpense';


const myProps = expenses.map(items =>{
  return(
    <ExpenseItem
      key = {items.id}
      {...items}
    />
  )
});
function App() {

  return ( 
        <Cards className='expensediv'>
          <NewExpense/>
          {myProps}
        </Cards>

  );
}

export default App;
