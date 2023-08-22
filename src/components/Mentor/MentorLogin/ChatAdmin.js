import React from "react";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
const ChatAdmin = () => {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  return (
    <div className="container" style={{Widget:"10rem", height:"20rem"}}>
      <div className="w-auto text-center shadow-lg  justify-content-center p-5 m-5">
        <h1>Chat with Admin 😎</h1>
        <p className="w-75 text-center justify-content-center mx-auto px-5 pt-5 text-secondary"></p>
      </div>
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </div>
  );
};

export default ChatAdmin;
