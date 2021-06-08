import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => (
<section className={styles.statistics}>
  {title && <h2 className={styles.statistics_title}>{title}</h2>}
  <ul className={styles.stat_list}>
    {stats.map(({id, label, percentage}) => (<li key={id} className={styles.stat_item}>
      <span className={styles.stat_label}>{label}</span>
      <span className={styles.stat_percentage}>{percentage}</span>
    </li>))
    }
  </ul>
</section>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}))
}

export default Statistics;