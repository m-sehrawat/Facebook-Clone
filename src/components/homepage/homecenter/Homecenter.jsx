import React from "react"; 
import {StoryReel}  from "./StoryReel"
import "./homecenter.css";
import { MessageSender } from "./MessageSender";


export const Homecenter = () => {
    return (
        <div className="Homecenter">
        <StoryReel  />
        <MessageSender />
        
        </div>
    )
}
