import React from "react";
import { BiChevronDown } from 'react-icons/bi';
import { WiDayCloudy } from "react-icons/wi";
import { BsPeople, BsFlag } from "react-icons/bs";
import { RiMessengerLine, RiVideoAddFill } from "react-icons/ri";
import { MdOutlineGroups } from "react-icons/md";
import "./leftsidebar.css";
import SidebarRow from "./LeftSidebarRow";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
    return (
        <IconContext.Provider value={{ size: "1.5em", color: "#2e81f4", className: "global-class-name" }}>
            <div className="sidebar">
                <div className="sidebarRow">
                <BsPeople />
                <h4><Link to={'/friends'}>Friends</Link></h4>
                </div>
                {/* <SidebarRow Icon={<BsPeople />} title="Friends" /> */}
                <SidebarRow Icon={<WiDayCloudy />} title="Weather" />
                <SidebarRow Icon={<BsFlag />} title="Pages" />
                <SidebarRow Icon={<RiMessengerLine />} title="Messenger" />
                <SidebarRow Icon={<RiVideoAddFill />} title="Video" />
                <SidebarRow Icon={<MdOutlineGroups />} title="Groups" />
                <SidebarRow Icon={<BiChevronDown />} title="Marketplace" />
            </div>
        </IconContext.Provider>




    )
}

export default LeftSidebar;
