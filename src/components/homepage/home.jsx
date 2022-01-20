import { Homecenter } from "./homecenter/Homecenter";
import LeftSidebar from "./sidebar/LeftSidebar";
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
