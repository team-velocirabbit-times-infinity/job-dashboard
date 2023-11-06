import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles.scss';
import {createRoot} from 'react-dom/client';



// render(<App />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.scss';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);