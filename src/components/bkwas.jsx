
import { useState, useEffect } from "react";

import { loadData } from '../utils/localstore';

export const Bkwas = () => {
  const [friendsId, setFriendsId] = useState([]);
 
  const [arr, setArr] = useState([]);

  const { _id } = loadData('user');

  


  function getdata(id) {

    fetch(`http://localhost:1234/user/${id}`).then(d => d.json()).then(res => setFriendsId(res.friend_ids))
      .catch(err => { console.log(err) })
  }


  useEffect(() => {
    getdata(_id)
  }, [])


  useEffect(() => {

    friendsId.forEach((id) => {
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

  }, [ friendsId])


  





  return <div>Hello mai v bak hu frd list k liye</div>





}










