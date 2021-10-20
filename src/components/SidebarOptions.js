import React from 'react'
import styled from "styled-components";
import { db } from "../firebase.js"
import { collection, addDoc } from "firebase/firestore";


function SidebarOptions({Icon, title, addChannelOption, id}) {

    
    const addChannel = async () => {
            const channelName = prompt("Please enter the Channel's name")
            
            if (channelName) {
                await addDoc(collection(db, "rooms"), {
                    name: channelName,
                    
                  });
                // db.collection('rooms').add({
                //     name: channelName,
                // });
            }
        };

        const selectChannel = () => {};

    return (
        <SidebarOptionsContainer
            onClick = {addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize = "small" style={{
                padding: 10}} />}
                {Icon ? (
                    <h3>{title}</h3>
                ) : ( <SidebarOptionsChannel>
                        <span>#</span> {title}
                    </SidebarOptionsChannel>
                )}
        </SidebarOptionsContainer>
        
    )
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;

cursor: pointer;
:hover{
    opacity:0.9;
    background-color: #340e36;
}
> h3{
    font-weight: 500;

}
> h3 > span {
    padding: 15px; 
}
`
const SidebarOptionsChannel = styled.h3`
padding: 10px 0;
font-weight: 300;
`
