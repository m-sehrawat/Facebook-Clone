import React from "react"
import "./friendrequest.css";
import {Leftsidebar} from "./Leftsidebar";
import {FriendList} from "./FriendList";

export const FriendRequest = () => {
    return (
        <div>
            <Leftsidebar />
            <FriendList title="bhargav" image={"sun.jpg"} mutual="1" />
        </div>
    )
}
