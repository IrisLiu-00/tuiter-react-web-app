import React from 'react';
import ExploreComponent from './explore';
import { Routes, Route } from 'react-router';
import whoReducer from './reducers/who-reducer';
import tuitsReducer from './reducers/tuits-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import HomeComponent from './home';

const store = configureStore({ reducer: { who: whoReducer, tuitsData: tuitsReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<HomeComponent />} />
        <Route path="/explore" element={<ExploreComponent />} />
      </Routes>
    </Provider>
  );
}

export default Tuiter;
