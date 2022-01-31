import React, { useState } from "react";
import { Avatar, Box, Image } from "@chakra-ui/react";
import { FiThumbsUp } from "react-icons/fi"
import { FaRegCommentAlt } from "react-icons/fa";
import "./feed.css";
import { RiShareForwardLine } from "react-icons/ri";
export const Feed = ({ ProfilePic, image, username, timestamp, message, wid, mgtop }) => {

    const [like, setLike] = useState(0)

    const handleLike = () => {
        setLike((p) => {
            if (p === 1) {
                return 0
            } else {
                return p + 1;
            }
        })
    }

    return (
        <Box w={wid} my={mgtop}>
            <div className="feed">
                <div className="feed__top">
                    <Avatar src={ProfilePic} className="feed__avatar " />
                    <div className="feed__topInfo">
                        <h3>{username}</h3>
                        <p>{timestamp}</p>
                    </div>
                </div>

                <div className="feed__bottom">
                    <p>{message}</p>
                </div>
                <div className="feed__image">
                    <Box px={10} >
                        <Image m={'auto'} h={'500px'} src={image} alt="" />
                    </Box>
                </div>
                <div className="feed__options">
                    <div onClick={handleLike} className="feed__option">
                        <FiThumbsUp  />
                        <p>{like === 0 ? '': like} Like</p>
                    </div>
                    <div className="feed__option">
                        <FaRegCommentAlt />
                        <p>Comment</p>
                    </div>
                    <div className="feed__option">
                        <RiShareForwardLine />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </Box>
    )
}
