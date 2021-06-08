import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from './person.svg';
import styles from './Friend.module.css';

const styleForStatus = {
  online: {
    backgroundColor: 'green',
  },
  offline: {
    backgroundColor: 'red',
  }
}

const Friend = ({avatar, name, isOnline}) => 
  (<div className={styles.Friend}>
    <span className={styles.status} 
      style={isOnline? 
        styleForStatus.online :  
        styleForStatus.offline}>
    </span>
  <img src={avatar} alt="Аватар друга" width="48" />
  <p>{name}</p></div>)
;

Friend.defaultProps = {
    avatar: avatarImage,
};

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default Friend;
