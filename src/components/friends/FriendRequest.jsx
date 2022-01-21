import React from "react"
import "./friendrequest.css";
import {Leftsidebar} from "./Leftsidebar";
import { FriendList } from "./FriendList";

export const FriendRequest = () => {
    return (
        <div>
           <Leftsidebar />
           <div className="friendrequest">            
           <FriendList image={"sun.jpg"} title="Bhargav" mutual="1"/>
            <FriendList image={"sun.jpg"} title="Bhargav" mutual="1"/>
            <FriendList image={"sun.jpg"} title="Bhargav" mutual="1"/>
            <FriendList image={"sun.jpg"} title="Bhargav" mutual="1"/>
           
            </div>
     
        </div>
    )
}
