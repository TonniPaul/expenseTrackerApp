import ExpenseItem from './componennts/Expenses/ExpenseItem';
import { expenses } from './componennts/Expenses/expenses';
import Cards from './componennts/UI/Cards';


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
    <div className="App">
        <h1 className='headertext'>
          ExpenseItem
        </h1>
        <Cards className='expensediv'>
          {myProps}
        </Cards>
    </div>
  );
}

export default App;
