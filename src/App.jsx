import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";
import { set } from "react-hook-form";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const [user, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    let filterData = user.filter((u) => u.id !== id);
    console.log(filterData);
    setUsers(filterData);
    localStorage.setItem("user", JSON.stringify(filterData));
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar setToggle={setToggle} setUpdatedData={setUpdatedData} />
      {toggle ? (
        <div className="flex gap-3 flex-wrap">
          {user.map((elem) => {
            return (
              <UserCard
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                key={elem.id}
                user={elem}
              />
            );
          })}
        </div>
      ) : (
        <Form
          updatedData={updatedData}
          user={user}
          setUsers={setUsers}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default App;
