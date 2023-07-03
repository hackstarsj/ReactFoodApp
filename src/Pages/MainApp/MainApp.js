import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import HomeComponent from './Home/HomeComponent';
import ProfileComponent from './Profile/ProfileComponent';
import CartComponent from './Cart/CartComponent';
import ChatComponent from './Chat/ChatComponent';
import SearchPage from './Search/SearchPage';

export default function MainApp(){

    let [value,setValue]=useState('home');
    let [lastPage,setLastPage]=useState('home');

    const handleChange=(event,newvalue)=>{
      setValue(newvalue);
      console.log(newvalue);
    }

    const getPage=(value)=>{
      switch(value){
        case 'home':
          return <HomeComponent mainShowSearchPage={mainShowSearchPage}/>
          break;
        case 'profile':
          return <ProfileComponent/>
          break
        case 'cart':
          return <CartComponent  mainShowSearchPage={mainShowSearchPage}/>
          break;
        case 'chat':
          return <ChatComponent/>
          break;
        case 'search':
          return <SearchPage mainShowSearchPage={mainresetSearchPage}/>
          break;
        default:
          return <HomeComponent/>
      }
    }

    const mainShowSearchPage=(lastPage)=>{
      setValue('search');
      setLastPage(lastPage);
    }

    const mainresetSearchPage=()=>{
      setValue(lastPage);
    }

    return (
        <>
        {getPage(value)}
        <BottomNavigation value={value} onChange={handleChange} className='bottom-navigation-custom'>
        <BottomNavigationAction
          label="Home"
          value="home"
          className={value=='home'?'active':''}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          className={value=='profile'?'active':''}
          icon={<PersonPinIcon />}
        />
        <BottomNavigationAction
          label="Cart"
          value="cart"
          className={value=='cart'?'active':''}
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction 
            label="Chat"
            value="chat"
            className={value=='chat'?'active':''}
            icon={<ChatBubbleIcon />} />
      </BottomNavigation>
      </>
    )
}