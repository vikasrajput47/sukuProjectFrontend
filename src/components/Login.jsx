import React, { useContext, useState } from 'react';
import { Context } from '..';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { getName } from './Getname.js';
const Login = () => {
    const { auth, setAuth,setUser,user,server } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
      const response = await fetch(`${server}/user/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
        credentials: "include",
      });

      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData.success) {
        setAuth(true);
        setUser(getName(jsonData.message));
        console.log(user);
        toast.success(jsonData.message);
      } else {
        toast.error(jsonData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    console.log('Login submitted:', { email, password });
  };
    if (auth) {
    return <Navigate to={'/'}/>
}
  return (
    <div className="max-w-sm mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
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
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
        <Link
          className="block text-center mt-4 text-blue-500 hover:underline"
          to="/register"
        >
          Click to Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
