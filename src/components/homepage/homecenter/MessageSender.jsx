import React from "react";
import "./messagesender.css";
import {Avatar} from "@chakra-ui/react";
export const MessageSender = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="messageSender">
        <div className = "messageSender__top">
                <Avatar />
                <form>
                     <input type="text" 
                     placeholder={`what's on your mind`}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
        </div>
      
      <div className="messageSender__bottom">
           
      </div>
             
        </div>
    )
}
