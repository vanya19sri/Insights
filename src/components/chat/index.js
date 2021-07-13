import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import ChatFeed from './components/chat/ChatFeed';

function Chat() {
    return (
            <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      )
}