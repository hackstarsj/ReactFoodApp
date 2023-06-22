import React from 'react';
import ReactDOM from 'react-dom/client';
import SplashScreen from './Pages/SplashScreen';
import './css/style.css';
import Walkdown1 from './Pages/Walkdown1';
import Walkdown2 from './Pages/Walkdown2';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SplashScreen/> */}
    {/* <Walkdown1/> */}
    {/* <Walkdown2/> */}
    {/* <Login/> */}
    <Signup/>
  </React.StrictMode>
);

