import React from "react"; 
import {StoryReel}  from "./StoryReel"
import "./homecenter.css";
import { MessageSender } from "./MessageSender";
import { Feed } from "./Feed";
import { useEffect,useState } from "react";


export const Homecenter = () => {

  const [arr,setArr]=useState([])
 useEffect(()=>{
 getpost()

 },[])

  
 const getpost=()=>{
  fetch(`http://localhost:1234/post`)

  .then(d => d.json())
  .then((res) => {
      
      console.log("Response:", setArr(res))
     
  })
  .catch(err => { console.log(err) })

 }



console.log(arr, "I am post")


    return (
        <div className="Homecenter">
        <StoryReel  />

        <MessageSender /> 

        {arr.map(e=> <Feed 
        ProfilePic={e.img}
        message={e.title}
        timestamp={e.createdAt} 
        username="bhargav"
        image={e.img}

        />   )}
            
        
        <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"logo512.png"}

        />
        <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"sun.jpg"}

        />
      <Feed 
        ProfilePic={"pages.jpg"}
        message="yeah it's working"
        timestamp="this is a time stamp" 
        username="bhargav"
        image={"logo512.png"}

        />
        </div>
    )
}
