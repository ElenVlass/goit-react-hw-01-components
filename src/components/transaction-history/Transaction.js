import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({id, type, amount, currency}) => (
    <tr key={id} className={styles.table_row}>
      <td className={styles.table_row}>{type}</td>
      <td className={styles.table_row}>{amount}</td>
      <td className={styles.table_row}>{currency}</td>
    </tr>
);

Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default Transaction;