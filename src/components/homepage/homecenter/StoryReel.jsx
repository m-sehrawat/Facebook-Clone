import React from "react";
import {Story} from "./Story";
import "./storyReel.css";
export const StoryReel = () => {
    return (
        <div className="storyReel">
        <Story
        image ={"story1.jpg"}
        ProfileSrc=""
        title="Bhargav Katira" />
         <Story
        image ={"story2.jpg"}
        ProfileSrc=""
        title="Mohit Sehrawat" />
         <Story
        image ={"story3.jpg"}
        ProfileSrc=""
        title="Swarnika Sharma" />
         <Story
        image ={"story4.jpg"}
        ProfileSrc=""
        title="Deepak Solanki" />
         <Story
        image ={"story5.jpg"}
        ProfileSrc=""
        title="Tarun Mahajan" />
         
            
        </div>
    )
} 
