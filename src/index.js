import React from 'react';
import ReactDOM from 'react-dom/client';
import SplashScreen from './Pages/SplashScreen';
import './css/style.css';
import Walkdown1 from './Pages/Walkdown1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SplashScreen/>
    <hr></hr>
    <Walkdown1/>
  </React.StrictMode>
);

