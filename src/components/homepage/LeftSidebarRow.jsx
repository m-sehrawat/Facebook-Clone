import React from "react";  
import {Img} from "@chakra-ui/react"

const LeftSidebarRow = ({title, Icon }) => {
    return (
        <div className="sidebarRow">
        <Img src={Icon} w="10vh"/> 
            <h4>{title}</h4>
        </div>
    )
}

export default LeftSidebarRow;
