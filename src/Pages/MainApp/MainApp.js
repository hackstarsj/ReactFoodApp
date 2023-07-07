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
import ChatInnerComponent from './Chat/ChatInnerComponent';
import CallComponent from './Calling/CallComponent';

export default function MainApp(){

    let [value,setValue]=useState('home');
    let [lastPage,setLastPage]=useState('home');
    let [displayNav,setDisplayNav]=useState('flex');

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
          return <ChatComponent showChatInnnerScreen={showChatInnnerScreen} mainresetLastPage={mainresetLastPage}/>
          break;
        case 'chatinner':
          return <ChatInnerComponent mainresetLastPage={mainresetLastPage} showCallingScreen={showCallingScreen}/>
          break;
        case 'calling':
          return <CallComponent mainresetLastPage={mainresetLastPage} />
          break;
       case 'search':
          return <SearchPage mainShowSearchPage={mainresetSearchPage}/>
          break;
        default:
          return <HomeComponent/>
      }
    }

    const showChatInnnerScreen=(chatItem)=>{
      setValue('chatinner');
      setDisplayNav('none')
      setLastPage('chat');
    }

    const showCallingScreen=()=>{
      setValue('calling');
      setDisplayNav('none')
      setLastPage('chatinner');
    }

    const mainShowSearchPage=(lastPage)=>{
      setValue('search');
      setLastPage(lastPage);
    }

    const mainresetSearchPage=()=>{
      setValue(lastPage);
    }
    const mainresetLastPage=(prevpage)=>{
      setValue(prevpage);
      setLastPage(prevpage);
      setDisplayNav('flex')
    }

    return (
        <>
        {getPage(value)}
        <BottomNavigation value={value} onChange={handleChange} className='bottom-navigation-custom'           sx={{display:displayNav}}>
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