import React from "react"; 
import {StoryReel}  from "./StoryReel"
import "./homecenter.css";
import { MessageSender } from "./MessageSender";
import { Feed } from "./Feed";


export const Homecenter = () => {
    return (
        <div className="Homecenter">
        <StoryReel  />
        <MessageSender /> 
        <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"sun.jpg"}

        />
        <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"sun.jpg"}

        />
      <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"sun.jpg"}

        />
        </div>
    )
}
