
import { useState, useEffect } from "react";

import { loadData } from '../utils/localstore';

export const Bkwas = () => {
  const [frdids, setFrdids] = useState([])
  console.log('frdids:', frdids)
 
  const [arr, setArr] = useState([])
  console.log('arrOutside:', arr)

  const { _id } = loadData('user')

  


  function getdata(id) {

    fetch(`http://localhost:1234/user/${id}`).then(d => d.json()).then(res => setFrdids(res.friend_ids))
      .catch(err => { console.log(err) })
  }


  useEffect(() => {
    getdata(_id)
  }, [])


  useEffect(() => {

    frdids.forEach((id) => {
      fetch(`http://localhost:1234/user/${id}`)
        .then((res) => res.json())
        .then((res) => {
          arr.push(res)
          
          setArr([...arr]);
        })
        .catch((err) => {
          console.log(err);
        })
    })

  }, [ frdids])


  





  return <div>Hello mai v bak hu frd list k liye</div>





}










