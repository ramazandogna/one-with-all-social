import './index.css';

import GlobalState, { GlobalContext } from './context/GlobalState';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalState>
         <App />
      </GlobalState>
   </React.StrictMode>
);
