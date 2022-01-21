import {BsPeople, BsPeopleFill} from "react-icons/bs";
import {FaBirthdayCake} from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import SidebarRow from "../homepage/sidebar/LeftSidebarRow";
import { MdOutlineHome } from "react-icons/md";
import "./leftsidebar.css";

export const Leftsidebar = () => {
    return (
        <div className ="sidebar1">
         <SidebarRow  Icon={<MdOutlineHome />} title="Home"/>
         <SidebarRow  Icon={<BsPeople />} title="Friend Request"/>
         <SidebarRow  Icon={<BsPeopleFill />} title="Suggestions"/>
         <SidebarRow  Icon={<GiThreeFriends />} title="All Friends"/>
         <SidebarRow  Icon={<BsPeople />} title="Friends"/>
         <SidebarRow  Icon={<FaBirthdayCake />} title="Birthday"/>
         <SidebarRow  Icon={<BsPeople />} title="Custom lists"/>

            
        </div>
    )
}
