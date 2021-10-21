import React, {useRef} from "react"
import styled from "styled-components"
import { Button } from '@mui/material'
import { db } from "../firebase"
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";




function ChatInput(channelName, channelID) {
    const [input, setInput] = useState("");

    console.log(channelID);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!channelID){
            return false;
            
        }

        await addDoc(collection(db, "rooms", "123", "messages"), {
            message: input,
            timestamp: serverTimestamp(),
            user: "Eric El-Serafy",
            userImage: "https://scontent.fyto1-2.fna.fbcdn.net/v/t1.6435-9/240900533_10158021349241128_6458772713841142032_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=Fob-WhSn8v4AX96X-BL&_nc_oc=AQls2yxsY8GjZWYfeV_IkKzoM-vanNqx1sTI37GcIp_q4u73PTsDHJ8cg_X4N9maPgM&_nc_ht=scontent.fyto1-2.fna&oh=ae7efc32ca23befe90f2caebd0395a21&oe=61970FD7"
        });
        // addDoc(collection(doc(collection(db, "rooms"), channelID), "messages"), 

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input placeholder = {`Message #ROOM`}
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