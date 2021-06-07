import React from 'react';

import Friendslist from './components/friend-list/FriendList';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import Layout from './components/layout/Layout';

import user from './components/social-profile/user.json';
import friends from './components/friend-list/friends.json';
import statisticalData from './components/statistics/statistical-data.json' ;
import transactions from './components/transaction-history/transactions.json';

const App = () => {
    return (
    <Layout>

        <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />

        <Friendslist items= {friends}/>

        <Statistics 
        title="Upload stats"
        stats={statisticalData}
        />
        <Statistics stats={statisticalData} />

        <TransactionHistory 
        items={transactions}/>
 
    </Layout>
    );
};

export default App;
