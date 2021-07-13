import { ChatEngine } from 'react-chat-engine';

import React from 'react';
import './App.css';
import Calls from './components/calls';
import ChatFeed from './components/chat/ChatFeed';
import LoginForm from './components/login/LoginForm';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Chat from './components/chat';

/*function App() {
  return <Calls />;
}*/
const projectID = '1708ba0c-b67d-46dc-8405-012e87888ba6';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
    <Router>
    <Sidebar />
    <Switch>
    <Route exact path="/" component={Calls} />
    <Route exact path="/chat" component={Chat} />
    <Redirect to ="/" />
    </Switch>
    </Router>
    </>
    );
  };
  /*<ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />*/
export default App;
  