
import { useState , useEffect} from "react";
import { resolvePath } from "react-router";
import { loadData } from '../utils/localstore';

export const Bkwas=()=>{
const [frdids,setFrdids]=useState([])
// const [arr,setArr]=useState([])
const [obj,setObj]=useState({})
const {_id}=loadData('user')
var arr=[]



   function getdata(id){

    fetch(`http://localhost:1234/user/${id}`).then(d=>d.json()).then(res=> setFrdids(res.friend_ids))
       .catch(err=>{console.log(err)})
   }
  

    useEffect(()=>{
      getdata(_id)
    },[])
   
    
     

    
    useEffect(()=>{
      frdids.forEach((userid)=>{

        fetch(`http://localhost:1234/user/${userid}`).then(d=>d.json()).then(res=>setObj(res))
            .catch(err=>{console.log(err)})
          
      })  

    },[frdids])
       
    
    
  




return <>
   
   

</>





}


 

    





