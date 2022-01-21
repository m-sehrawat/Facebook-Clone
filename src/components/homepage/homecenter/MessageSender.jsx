import React, { useState } from "react";
import "./messagesender.css";
import {Avatar} from "@chakra-ui/react";
import {IoMdVideocam} from "react-icons/io";
import {MdPhotoLibrary, MdOutlineMood} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";


export const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="messageSender">
        <div className = "messageSender__top">
                <Avatar />
                <form>
                     <input 
                     type="text" 
                     value ={input}
                     onChange={(e)=> setInput(e.target.value)}
                     placeholder={`what's on your mind`}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
        </div>
      
      <div className="messageSender__bottom">
           <div className="messageSender__option">
           <IoMdVideocam style={{color: "red", fontSize:"22px"}}/>
           <h4>Live Video</h4>
           </div>
           <div className="messageSender__option">
           <MdPhotoLibrary style={{color: "green", fontSize:"22px"}}/>
           <h4>Photo/Video</h4>
           </div>
           <div className="messageSender__option">
           <MdOutlineMood style={{color: "yellow", fontSize:"22px"}}/>
           <h4>feeling/Activity</h4>
           </div>
      </div>
             
        </div>
    )
}
