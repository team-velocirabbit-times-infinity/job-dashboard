import React from 'react';
// import { render } from 'react-dom';
import App from './App';
import './styles.scss';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


// render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);