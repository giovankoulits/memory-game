import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/memoryGame/App.js';
import Modal from 'react-modal';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');

root.render(<App />);
