import { BrowserRouter,Routes,Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { Context } from ".";


const App = () => {
  const {  setAuth ,setLoading,server} = useContext(Context);
  const fetchData = async () => {
    try {
      const data = await fetch(`${server}/user/me`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await data.json();
      if (res.success) {
        setAuth(res.success);
     
        setLoading(false);
        
      }
    } catch (error) {
      console.log(error);
    }
   console.log("his")
 }
  useEffect(() => {
    fetchData();
  })
  return (
    <div>
      <BrowserRouter>
         
        <Routes>
         <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={ <Login/>} />
          <Route path="/register" element={ <Register/>} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
