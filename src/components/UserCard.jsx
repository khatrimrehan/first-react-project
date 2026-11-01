import React from "react";

const UserCard = ({user}) => {
  return (
    <div>
       <div className="bg-gray-600 w-60 p-5 rounded-xl ml-4 gap-3 flex flex-col">
        <div className="object-cover flex items-center">
          <img
            className="w-full rounded"
            src={user.image}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-1 text-lg">
          <h1>{user.name}</h1>
          <h1>{user.Email}</h1>
          <h1>{user.Mobile}</h1>
        </div>
        <div className="flex justify-between">
          <button className="cursor-pointer text-lg font-semibold bg-red-400 p-2 rounded text-red-200">
            Delete
          </button>
          <button className="cursor-pointer text-lg font-semibold  bg-blue-400 p-2 rounded text-blue-200">
            Update
          </button>
        </div>
      </div> 
    </div>
  );
};

export default UserCard;
