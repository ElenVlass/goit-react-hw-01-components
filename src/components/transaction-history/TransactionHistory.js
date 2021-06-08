import React from 'react';
import PropTypes from 'prop-types';
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
        <Transaction key={id}
          type={type}
          amount={amount}
          currency={currency}
        />   
      ))}
    </tbody>

  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired
  })
  ).isRequired
}

export default TransactionHistory;