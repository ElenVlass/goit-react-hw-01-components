import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'

const Profile = ({avatar, name, tag, location, stats}) => (
<div className="Profile">
<div className="Profile-description">
  <img
    src={avatar}
    alt="Аватар пользователя"
    className="Profile-description__avatar"
  />
  <p className="Profile-description__name">{name}</p>
  <p className="Profile-description__tag">@{tag}</p>
  <p className="Profile-description__location">{location}</p>
</div>

<ul className="Profile-stats">
  <li className="Profile-stats__item">
    <span className="Profile-stats__label">Followers</span>
    <span className="Profile-stats__quantity">{stats.followers}</span>
  </li>
  <li className="Profile-stats__item">
    <span className="Profile-stats__label">Views</span>
    <span className="Profile-stats__quantity">{stats.views}</span>
  </li>
  <li className="Profile-stats__item">
    <span className="Profile-stats__label">Likes</span>
    <span className="Profile-stats__quantity">{stats.likes}</span>
  </li>
</ul>
</div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),

}

export default Profile;