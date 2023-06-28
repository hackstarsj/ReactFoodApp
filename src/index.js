import React from 'react';
import ReactDOM from 'react-dom/client';
import SplashScreen from './Pages/SplashScreen';
import './css/style.css';
import Walkdown1 from './Pages/Walkdown1';
import Walkdown2 from './Pages/Walkdown2';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UploadPhot from './Pages/UploadPhoto';
import UploadPhoto from './Pages/UploadPhoto';
import PreviewPhoto from './Pages/PreviewPhoto';
import SetLocation from './Pages/SetLocation';
import SuccessPage from './Pages/SuccssPage';
import MainApp from './Pages/MainApp/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SplashScreen/> */}
    {/* <Walkdown1/> */}
    {/* <Walkdown2/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <UploadPhoto/> */}
    {/* <PreviewPhoto/> */}
    {/* <SetLocation/> */}
    {/* <SuccessPage/> */}
    <MainApp/>
  </React.StrictMode>
);

