
import { useState , useEffect} from "react";
import { loadData } from '../utils/localstore';

export const Bkwas=()=>{

const {_id}=loadData('user')

   function getdata(id){

    fetch(`http://localhost:1234/user/${id}`).then(d=>d.json()).then(res=>console.log(res.friend_ids))

   }
  
  
   
  getdata(_id)
    






return <div>Hello mai v bak hu frd list k liye</div>





}


 

    





