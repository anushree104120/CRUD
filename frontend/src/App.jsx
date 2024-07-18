import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const[users,setUsers]= useState([]);
  // const index =0;

  useEffect(()=>{
    axios.get("http://localhost:3000/api/users")
    .then((response)=>{
      setUsers(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  

  return (
    <>
      <h1>Hello</h1>
      {
        users.map((user,index)=>{
          <div key = {user.id}>
            <h2>Name : {user.name}</h2><br></br>
            <h3> Age : {user.age}</h3><br></br>
            <h3>Email: {user.email}</h3>
          </div>
        })
      }
      
    </>
  )
}

export default App
