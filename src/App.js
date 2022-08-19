import ExpenseItem from './componennts/ExpenseItem';
import { expenses } from './componennts/expenses';
import Cards from './componennts/Cards';


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
