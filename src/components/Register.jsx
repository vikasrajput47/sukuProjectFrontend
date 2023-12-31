import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Context } from "..";
import { Link, Navigate } from "react-router-dom";
import { getName } from "./Getname.js";
import logo from "./img/logo.png";

const Register = () => {
  const { auth, setAuth, setLoading, setUser, server } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`${server}/user/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      const res = await data.json();
      setLoading(true);
      console.log(res);
      if (res.success) {
        setLoading(false);
        setAuth(true);
        setUser(getName(res.message));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      setAuth(false);
      toast.error(error);
      console.log(error);
    }
    console.log("Register submitted:", { email, password });
  };

  if (auth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex flex-col md:flex-row justify-around items-center">
      <div className="mb-8 md:mb-0 md:mr-8">
        <img className="mx-10 hidden md:block" src={logo} alt="" />
      </div>
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name:</label>
          <input
            className="w-full p-2 mb-4 border rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block mb-2">Email:</label>
          <input
            className="w-full p-2 mb-4 border rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mb-2">Password:</label>
          <input
            className="w-full p-2 mb-4 border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700"
            type="submit"
          >
            Register
          </button>
          <Link
            className="block text-center mt-4 text-blue-500 hover:underline"
            to="/login"
          >
            Click to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
