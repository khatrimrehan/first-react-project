import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const [user, setUsers] = useState(() => {
   return JSON.parse(localStorage.getItem("user")) || []
  });

  // let obj = {
  //   name: "rehan",
  //   age: 43,
  //   gender: "male"
  // }

  // localStorage.setItem("namee", JSON.stringify(obj))
  // let rawdata = localStorage.getItem("namee") 
  // let data = JSON.parse(rawdata)
  // console.log(data)


  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar setToggle={setToggle} />
       {toggle ? (
        <div className="flex gap-3">
          {
            user.map((elem , index) => {
              return <UserCard key={index} user={elem} />
            })
          }
        </div>
      ) : (
        <Form user={user} setUsers={setUsers} setToggle={setToggle} />
      )} 
      
      
    </div>
  );
};

export default App;
