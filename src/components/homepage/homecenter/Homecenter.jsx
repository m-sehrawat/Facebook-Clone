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
      
      console.log("Response:", setArr(res.reverse()))
     
  })
  .catch(err => { console.log(err) })

 }

  

    return (
        <div className="Homecenter">
        <StoryReel  />

        <MessageSender  /> 

        {arr.map(e=> <Feed 
        ProfilePic={e.img}
        message={e.title}
        timestamp={e.createdAt} 
        username={e.username}
        image={e.img.slice(-1,200)}

        />   )}
            
        
       
       

       
        </div>
    )
}
