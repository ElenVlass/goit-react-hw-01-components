import React from 'react';
import PropTypes from 'prop-types';
import styles from'./Profile.module.css'

const Profile = ({avatar, name, tag, location, stats}) => (
<div className={styles.Profile}>
<div className={styles.Profile_description}>
  <img
    src={avatar}
    alt="Аватар пользователя"
    className={styles.Profile_description__avatar}
  />
  <p className={styles.Profile_description__name}>{name}</p>
  <p className={styles.Profile_description__tag}>@{tag}</p>
  <p className={styles.Profile_description__location}>{location}</p>
</div>

<ul className={styles.Profile_stats}>
  <li className={styles.Profile_stats__item}>
    <span className={styles.Profile_stats__label}>Followers</span>
    <span className={styles.Profile_stats__quantity}>{stats.followers}</span>
  </li>
  <li className={styles.Profile_stats__item}>
    <span className={styles.Profile_stats__label}>Views</span>
    <span className={styles.Profile_stats__quantity}>{stats.views}</span>
  </li>
  <li className={styles.Profile_stats__item}>
    <span className={styles.Profile_stats__label}>Likes</span>
    <span className={styles.Profile_stats__quantity}>{stats.likes}</span>
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