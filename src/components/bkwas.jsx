

// import log from "E:\\facebook\\Facebook-Clone\\src\\uploadsPic\\fb.png"


 import { useState, useEffect } from "react";
 import { loadData, saveData } from "../utils/localstore";



export const Bkwas=()=>{
    const myarr=loadData("searcharr")
     const sender=loadData("user")

    const [arr, setArr]=useState([]);
  
    useEffect(()=>{
        console.log(arr)
    }
    ,[arr])




    async function searchUser(username){  
  
  
        try {
          
         let res = await fetch(`http://localhost:1234/search/${username}`);
         let data = await res.json()
      
         return data
      
        
       
          
        } catch (e) {
          console.log(e)
        }
       
      
       
      
      }

    async function main(){

        let username=document.getElementById("searchbox").value
      
        if(username.length<2){return false;}
        
      
       let res = await searchUser(username)
         
       console.log(res)
            setArr(res)
      }




   var timerId ;
    function debounce(func,delay){
        if(timerId){
          clearTimeout(timerId);
        }
        
        timerId=setTimeout(() => {
        
          func();
        
          
        }, delay);
        
        
        
        }


     function frdRequest(senderId,receiverId){
         console.log("senderId",senderId);
         console.log("receiverId", receiverId)

     }   

     
    return <><div>Bakwas Page hu mai<input style={{border:"2px solid black"}} type="text" placeholder="search user her" id='searchbox' onInput={()=>debounce(main,1000)} /></div>
    
       
      </>

    



}

