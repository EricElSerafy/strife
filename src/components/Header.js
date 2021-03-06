import React from "react";
import styled from "styled-components"
import { Avatar } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { useAuthState } from 'react-firehooks';
import { auth } from '../firebase'


function Header(){
    const [user] = useAuthState(auth);
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar
                alt={user?.displayName}
                src={user?.photoURL}
                />
                <AccessTimeIcon/>
            </HeaderLeft>
            {/* Header middle */}
            <HeaderMiddle>
                <SearchIcon />
                <input placeholder= "Search" />
            </HeaderMiddle>
            {/* Header right */}
            <HeaderRight>
                <HelpCenterIcon/>
            </HeaderRight>
        </HeaderContainer>
        
    )
    
}

export default Header;

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding:10px 0;
background-color: var(--slack-color);
color: white;
`


const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
    `
const HeaderMiddle = styled.div`
flex: 0.6;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;

> input{
    background-color: transparent;
    border: none;
    text-align: left;
    outline: none;
    min-width: 30vw;
}
> .MuiSvgIcon-root{
    margin-left: -50px;
}
`
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`