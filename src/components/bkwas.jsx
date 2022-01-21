
import { useState , useEffect} from "react";
import { loadData } from '../utils/localstore';

export const Bkwas=()=>{
const [frdids,setFrdids]=useState([])
const {_id}=loadData('user')

   function getdata(id){

    fetch(`http://localhost:1234/user/${id}`).then(d=>d.json()).then(res=> setFrdids(res.friend_ids))
       .catch(err=>{console.log(err)})
   }
  

    useEffect(()=>{
      getdata(_id)
    },[])
   
//   
    
  frdids.forEach((userid)=>{
     console.log(userid)
  })       






return <div>Hello mai v bak hu frd list k liye</div>





}


 

    





