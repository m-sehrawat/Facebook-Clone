import React from "react";
import {Story} from "./Story";
import "./storyReel.css";
import fb from "../fb.png";
import sun from "../sun.jpg";
export const StoryReel = () => {
    return (
        <div className="storyReel">
        <Story
        image ={sun}
        ProfileSrc={fb}
        title="Bhargav Katira" />
         <Story
        image ={sun}
        ProfileSrc={fb}
        title="Bhargav Katira" />
         <Story
        image ={sun}
        ProfileSrc={fb}
        title="Bhargav Katira" />
         <Story
        image ={sun}
        ProfileSrc={fb}
        title="Bhargav Katira" />
         <Story
        image = {sun}
        ProfileSrc={fb}
        title="Bhargav Katira" />
         
            
        </div>
    )
} 
