import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({type, amount, currency}) => (
    <tr className={styles.table_row}>
      <td className={styles.table_row}>{type}</td>
      <td className={styles.table_row}>{amount}</td>
      <td className={styles.table_row}>{currency}</td>
    </tr>
);

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default Transaction;