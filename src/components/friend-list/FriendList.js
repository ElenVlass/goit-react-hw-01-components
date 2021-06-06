import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';
import './FriendsList.css';

const Friendslist = ({items}) => (
    <ul className="FriendsList">
{items.map(({id, avatar, name, isOnline}) => (
<li key={id} className="FriendsList__item">
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