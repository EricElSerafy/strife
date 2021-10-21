import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import styled from "styled-components";
import { useAuthState } from 'react-firehooks';
import { auth, } from './firebase';
import Login from './components/Login';


function App() {
  const [user, loading] = useAuthState(auth)
  return (
    <div className="app">
      <Router>
        {!user ? ( 
          <Login/>
        ) : ( 
          <>
          <Header />
          <AppBody>
          <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* chat */}
                <Chat />
              </Route>
            </Switch>
          </AppBody>
      </> 
        )}
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
