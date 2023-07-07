import { Card, CardContent, Grid, Typography } from "@mui/material";
import ChatHeader from "../../common/ChatHeader";
import ChatCardFront from "../../common/ChatCardFront";

export default function ChatComponent(props){
    return <>
    <ChatHeader/>
    <ChatCardFront mainresetLastPage={props.mainresetLastPage} showChatInnnerScreen={props.showChatInnnerScreen}/>
    <ChatCardFront mainresetLastPage={props.mainresetLastPage} showChatInnnerScreen={props.showChatInnnerScreen}/>
    <ChatCardFront mainresetLastPage={props.mainresetLastPage} showChatInnnerScreen={props.showChatInnnerScreen}/>
    <ChatCardFront mainresetLastPage={props.mainresetLastPage} showChatInnnerScreen={props.showChatInnnerScreen}/>
    <ChatCardFront mainresetLastPage={props.mainresetLastPage} showChatInnnerScreen={props.showChatInnnerScreen}/>
    </>
}