import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HomePage } from './components/HomePage';
import { store } from './store/store';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HomePage />
    </Provider>
    

  
);
