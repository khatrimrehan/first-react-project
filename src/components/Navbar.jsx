import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="p-3">
      <div className="bg-black p-4 items-center flex w-full justify-between">
        <img
          className="w-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kL-Xdw2z-FmIjx93shHlLvHZl2YbID-yVVSrTQzA-iJuDuS6Igmq6HU&s"
          alt=""
        />
        <div className=" cursor-pointer flex gap-3 text-xl font-semibold">
          <h1>Home</h1>
          <h1>Contact</h1>
        </div>
        <button onClick={()=> setToggle(prev => !prev)} className="rounded cursor-pointer bg-green-800 p-2 font-semibold text-green-100">
          Create User
        </button>
      </div>
    </div>
  );
};

export default Navbar;
