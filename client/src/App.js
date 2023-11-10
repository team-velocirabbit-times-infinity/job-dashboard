import LoginPortal from './containers/LoginPortal';
import MainContainer from './containers/MainContainer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/a' element={<LoginPortal />} />
        <Route path='/' element={<MainContainer />} />
      </Routes>
    </div>
  );
};

export default App;
