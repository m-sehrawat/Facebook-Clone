import React from "react";
import cloudy from "../cloudy.png";
import people from "../people.png";
import pages from "../pages.png"
import "./leftsidebar.css";   
import SidebarRow from "./LeftSidebarRow"; 
import messenger from "../messenger.png";
import Icon from "@chakra-ui/icons";
const LeftSidebar = () => {
    return (
        <div className="sidebar">   
        <SidebarRow Icon={people} title="friends"/> 
        <SidebarRow Icon={cloudy} title="weather" / > 
        <SidebarRow Icon={pages} title="Pages" /> 
        <SidebarRow Icon={messenger} title="Messenger"/>
        <SidebarRow Icon={pages} title="video" />
            
        </div>
    )
}

export default LeftSidebar;
