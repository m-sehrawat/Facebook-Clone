import React from "react";
import {Story} from "./Story";
import "./storyReel.css";
export const StoryReel = () => {
    return (
        <div className="storyReel">
        <Story
        image={"story1.jpg"}
        ProfileSrc=""
        userName={'Mohit Sehrawat'}
        title="Bhargav Katira" />
         <Story
        image ={"story2.jpg"}
        ProfileSrc=""
        userName={'Rohit Kumar'}
        title="Mohit Sehrawat" />
         <Story
        image ={"story3.jpg"}
        ProfileSrc=""
        userName={'Bohit Kumar'}
        title="Swarnika Sharma" />
         <Story
        image ={"story4.jpg"}
        ProfileSrc=""
        title="Deepak Solanki" />
         <Story
        image ={"story5.jpg"}
        ProfileSrc=""
        userName={'Sohit Gumar'}
        title="Tarun Mahajan" />
        </div>
    )
} 
