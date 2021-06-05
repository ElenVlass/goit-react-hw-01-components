import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from './person.svg';

const Friend = ({avatar, name, isOnline}) => 
  (<div><span className="status">{isOnline? "on" : "off"}</span>
  <img className="avatar" src={avatar} alt="Аватар друга" width="48" />
  <p className="name">{name}</p></div>)
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
