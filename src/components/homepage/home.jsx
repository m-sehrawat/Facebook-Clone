import { Navbar } from "../navbar/Navbar";
import { Homecenter } from "./Homecenter";
import LeftSidebar from "./LeftSidebar";
import "./home.css";

export const Homepage = () => {
  return (
    <>
    <div className="Home">
    <div className="HomeBody">
      <LeftSidebar />
      <Homecenter />    
    </div>
    </div>

    </>
  );
};
