import { Card, CardContent, CardHeader, FormControl, Grid, TextField, Typography } from "@mui/material";
import ChatHeader from "../../common/ChatHeader";
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import React, { useEffect, useState } from "react";
export default function ChatInnerComponent(props) {

    let [messageList,setMessageList]=useState([]);
    let [currentMessage,setCurrentMessage]=useState("");
    const messagesContainerRef = React.useRef(null);
    const scrollToBottom = () => {
        // messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        messagesContainerRef?.current?.querySelector(':scope > :last-child')?.scrollIntoView()

    };
    
    useEffect(()=>{
        let oldMessage=[
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},
            {"id":"1","message":"Just to order","isMyMessage":false},
            {"id":"1","message":"Okay for what level of spiciness","isMyMessage":true},

        ]
        setMessageList(oldMessage)
    },[])

    const sendMessage=()=>{
        messageList.push({"id":"1","message":currentMessage,"isMyMessage":true});
        setMessageList([...messageList]);
        setCurrentMessage('');
        scrollToBottom();
    }

    useEffect(()=>{
        scrollToBottom();
    },[messageList])
  

  return (
    <>
      <ChatHeader showBack={true} mainresetLastPage={()=>props.mainresetLastPage("chat")}/>
      <Card
        variant="outlined"
        sx={{ margin: "5px 10px ", borderRadius: "20px" }}
      >
        <CardContent sx={{ padding: "10px", paddingBottom: "10px!important" }}>
          <Grid container>
            <Grid item xs={3}>
              <img
                src={"/img/profile.png"}
                className="img-responsive"
                style={{ marginTop: "5px" }}
              />
            </Grid>
            <Grid item xs={7} p={2}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Rajat
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "lightgrey" }}>
                 <span className="online-icon"></span>Online
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <PhoneIcon className="call-icon" onClick={props.showCallingScreen}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container className="chat-container" ref={messagesContainerRef}>
        {messageList.map((item)=>(
            <Grid item xs={12} className={item.isMyMessage?"message-right":"message-left"}>
                <Typography>{item.message}</Typography>
            </Grid>
        ))}
      </Grid>
      <Grid container> 
            <Grid item xs={10}>
                <FormControl fullWidth className="chat-input">
                    <TextField placeholder="Enter Message" value={currentMessage} onChange={(event)=>setCurrentMessage(event.target.value)}/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <TelegramIcon className="chat-send" onClick={()=>sendMessage()}/>
            </Grid>
      </Grid>
    </>
  );
}
