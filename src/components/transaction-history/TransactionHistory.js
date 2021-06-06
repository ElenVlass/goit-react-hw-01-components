import React from 'react';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
    <table className={styles.transaction_history}>
  <thead className={styles.table_head}>
    <tr>
      <th className={styles.table_row}>Type</th>
      <th className={styles.table_row}>Amount</th>
      <th className={styles.table_row}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency}) => (
       <Transaction 
        id={id}
        type={type}
        amount={amount}
        currency={currency}
    />   
      ))}
    
  </tbody>
</table>
);


export default TransactionHistory;