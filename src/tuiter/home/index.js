import React from 'react';
import TweetsPage from '../components/tweets-page';
import TuitsList from '../tuits/tuits-list';
import WhatsHappening from './whats-happening';

const HomeComponent = () => {
  return (
    <TweetsPage pageName="home">
      <div className="mt-2 mb-4">
        <h3>Home</h3>
        <WhatsHappening />
        <TuitsList />
      </div>
    </TweetsPage>
  );
};
export default HomeComponent;
