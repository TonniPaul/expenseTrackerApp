import  './ExpenseItem.css';
import Cards from '../UI/Cards';

function ExpenseItem(props) {
   const month = props.date.toLocaleString('en-UK', {month : 'long'});
   const day = props.date.toLocaleString('en-UK', {day : '2-digit'});
   const year = props.date.getFullYear();

   return (
      <Cards className='expense-item'>
         <Cards  className='dateData'> 
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
         </Cards>
         <div className='expense-item__description'>
            <h2 className='title--text'> {props.title}</h2>
            <Cards className='expense-item__price'>#{props.amount}</Cards>
         </div>
      </Cards>
   )
}
export default ExpenseItem;