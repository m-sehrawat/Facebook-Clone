import "./messagesender.css";
import { Avatar } from "@chakra-ui/react";
import { IoMdVideocam } from "react-icons/io";
import { MdPhotoLibrary, MdOutlineMood } from "react-icons/md";
import { CreatePost } from "./CreatePost";


export const MessageSender = () => {

    return (
        <div className="messageSender">
            <div className="messageSender__top">
               
                <Avatar mr={4} />
                <CreatePost />
                
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <IoMdVideocam style={{ color: "red", fontSize: "22px" }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <MdPhotoLibrary style={{ color: "green", fontSize: "22px" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <MdOutlineMood style={{ color: "yellow", fontSize: "22px" }} />
                    <h4>feeling/Activity</h4>
                </div>
            </div>

        </div>
    )
}
