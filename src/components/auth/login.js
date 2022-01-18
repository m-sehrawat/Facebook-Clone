
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useState ,useEffect} from "react"

import { saveData } from "../../utils/localstore";
import { useDispatch } from "react-redux"
import { loginfailure, loginsuccess } from "../../featuresRedux/auth/action"

export const Login=()=>{
    const navigate=useNavigate();
    const [form,setForm]=useState({});
    const dispatch=useDispatch()
  
  
   
   const handleChange=({target:{name,value}})=>{
       setForm({
           ...form,
           [name]:value
       })
   }
   

    
    


return <>
    <h1>Login Page</h1>
    <div>
  
    
         <div style={{border:"2px solid"}}>
            
           <p> <input type="text" placeholder="Email" name="email"  onChange={handleChange} /></p> 

           <p> <input type="text" placeholder="Password" name="password"  onChange={handleChange}/></p> 
           
           <button
           
           onClick={()=>{

            try{
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(form), 
            headers:{"Content-Type":"application/json"}
            ,
        }).then(res=>res.json()).then(res=>{ dispatch(loginsuccess(res.token));console.log(res); navigate(-1)})
     
    }
     catch(e){console.log(e);dispatch(loginfailure(e))}

     
           
           }

           }
           
           >Login</button>
         
            
         </div>
    


    </div>


</>



}