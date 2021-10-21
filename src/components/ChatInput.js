import React, {useRef} from "react"
import styled from "styled-components"
import { Button } from '@mui/material'
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import logo from './family.jpg';





function ChatInput( {channelName, channelID, chatRef} ) {
    const [input, setInput] = useState("");

   

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!channelID){
            return false;
            
        }
        
        await addDoc(collection(db, "rooms", channelID, "messages"), {
            message: input,
            timestamp: serverTimestamp(),
            user: "Eric El-Serafy",
            userImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        });
        
        chatRef?.current?.scrollIntoView({
            behavior: "smooth"        

        });

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input placeholder = {`Message #${channelName}`}
                value = {input}
                onChange = {(e) => setInput(e.target.value)}/>

                
                <Button hidden type = 'submit' onClick = {sendMessage}>
                    SEND
                </Button>
            </form>        
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form{
        display: flex;
        justify-content: center;
        position: relative;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border-radius: 3px;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`