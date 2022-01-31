import React from "react";
import { StoryReel } from "./StoryReel"
import "./homecenter.css";
import { MessageSender } from "./MessageSender";
import { Feed } from "./Feed";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Heroku } from "../../../utils/herokuLink";


export const Homecenter = () => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        getpost()
    }, [])


    const getpost = () => {
        fetch(`${Heroku}/post`)
            .then(d => d.json())
            .then((res) => {
                setArr(res.reverse());
            })
            .catch(err => { console.log(err) })
    }



    return (
        <div className="Homecenter">

            <StoryReel />

            <Box mb={'7px'}>
            <MessageSender getpost={getpost} />
            </Box>

            {arr.map((e) => (
                <div key={e._id}>
                    <Feed wid={'70%'} mgtop={'7px'}
                    ProfilePic={`uploadImgs/${e.userimg}`}
                    message={e.title}
                    timestamp={e.createdAt}
                    username={e.username}
                    image={`uploadImgs/${e.img}`}
                />
                
                </div>))}
        </div>
    )
}
