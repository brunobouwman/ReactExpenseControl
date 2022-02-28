import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28); //marh is the second month in the date array (january= 0);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

  return ( //There can only be one parent(root) element
    <div className='expense-item'>  
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2> 
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem; //exports this funciton as the default for this file
