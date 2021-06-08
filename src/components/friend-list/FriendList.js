import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const Friendslist = ({items}) => (
    <ul className={styles.FriendsList}>
    {items.map(({id, avatar, name, isOnline}) => (
    <li key={id} className={styles.FriendsList__item}>
        <Friend 
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />
    </li>
    ))}
    </ul>
);

Friendslist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired
    })
    ).isRequired,
}

export default Friendslist;