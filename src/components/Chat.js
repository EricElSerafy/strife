import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { selectRoomID } from '../features/appSlice';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from "react-firehooks/firestore"
import { db } from '../firebase';
import { collection, orderBy, query, doc } from '@firebase/firestore';
import Message from './Message';

function Chat() {
    const roomID = useSelector(selectRoomID);
    const [roomDetails] = useDocument(
        roomID && doc(db,"rooms", roomID)
    );
    const [roomMessages] = useCollection(
        roomID && query(collection(db, "rooms", roomID, "messsages"), orderBy("timestap", "asc")
    ));

    console.log(roomDetails?.data());
    console.log(roomMessages);

    return (
        <ChatContainer>
        <>
            
            <Header>
                <HeaderLeft>
                    <h4>
                    <strong>
                        #{roomDetails?.data().name}
                    </strong>
                    </h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                    <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages> 
                {roomMessages?.docs.map((doc) => {
                    const {message, timestamp, user,userImage} = doc.data();
                    return(
                        <Message
                        key = {doc.id}
                        message = {message}
                        timestamp = {timestamp}
                        userImage = {userImage}
                        /> 
                    )
                }
                )}
            </ChatMessages>
            <ChatInput
                channelName = {roomDetails?.data().name}
                channelID = {roomID}
            />
        </>
        </ChatContainer>
        
    )
}

export default Chat;


const ChatMessages = styled.div`
`


const Header = styled.div`
display:flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
` 
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

>   h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;

>   h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;

}
}    
`
const HeaderRight = styled.div`
> p{
    display: flex;
    align-items: center;
    font-size: 14px
}
> p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
}
`  

const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 55px;
`