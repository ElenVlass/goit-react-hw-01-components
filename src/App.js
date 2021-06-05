import React from 'react';
import Friendslist from './components/friend-list/FriendList';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import friends from './components/friend-list/friends.json'

const App = () => {
    return (
    <div>
        <h1>Главная страница</h1>

        <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />

        <Friendslist items= {friends}/>

 
    </div>
    );
};

export default App;
