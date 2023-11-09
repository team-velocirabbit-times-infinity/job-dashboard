import LoginPortal from '../Login/LoginPortal';
import MainContainer from './containers/MainContainer';
import React from 'react';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPortal />} />
        <Route path='mainmenu' element={<MainContainer />} />
      </Routes>
    </div>
  );
};

export default App;
