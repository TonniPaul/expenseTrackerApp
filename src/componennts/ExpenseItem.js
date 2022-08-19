import  './ExpenseItem.css';
import Cards from './Cards';

function ExpenseItem(props) {
   const month = props.date.toLocaleString('en-UK', {month : 'short'});
   const day = props.date.toLocaleString('en-UK', {day : '2-digit'});
   const year = props.date.getFullYear();

   return (
      <Cards className='expense-item'>
         <Cards  className='dateData'> 
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>
            <div className='year'>{year}</div>
         </Cards>
         <div className='expense-item__description'>
            <h2 className='title--text'> {props.title}</h2>
            <h2 className='expense-item__price'>#{props.amount}</h2>
         </div>
      </Cards>
   )
}
export default ExpenseItem;