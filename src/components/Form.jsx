import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setToggle, setUsers, user, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  const formSubmit = (data) => {
    if (updatedData) {
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        });
      });
     
    } else {
      let arr = [...user, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("user", JSON.stringify(arr));
    }

    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-2 bg-gray-400 p-5 rounded-xl w-90"
        >
          <h1 className="text-2xl font-bold mb-3">Create Users</h1>
          <input
            {...register("name", {
              required: "Name is Required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank Spaces Are Not Allowed ",
              },
            })}
            className="border-1 rounded p-2"
            type="text"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-700">{errors.name.message}</p>}
          <input
            {...register("Email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter valid email",
              },
            })}
            className="border-1 rounded p-2"
            type="email"
            placeholder="Enter your Email"
          />
          {errors.Email && (
            <p className="text-red-700">{errors.Email.message}</p>
          )}
          <input
            {...register("Mobile", {
              required: "Mobile is Required",
              minLength: {
                value: 10,
                message: "Minimum 10 digits are Required",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 digits are Required",
              },
            })}
            className="border-1 rounded p-2"
            type="number"
            placeholder="Enter Your Mobile"
          />
          {errors.Mobile && (
            <p className="text-red-700">{errors.Mobile.message}</p>
          )}
          <input
            {...register("image", {
              required: "Image is Required",
            })}
            className="border-1 rounded p-2"
            type="url"
            placeholder="Enter Image URL"
          />
          {errors.image && (
            <p className="text-red-700"> {errors.image.message}</p>
          )}
          <button className="bg-blue-500 p-2 rounded-xl mt-1 text-lg font-bold ">
            {updatedData ? "updateUsers" : "CreateUsers" }
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
