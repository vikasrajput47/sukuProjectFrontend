import React, { useContext } from "react";
import logout from "./img/logout.png";

import {  Navigate } from "react-router-dom";

import toast from "react-hot-toast";
import { Context } from "..";
const Navbar = () => {
    
  const { user,auth, setAuth,server } = useContext(Context);
  const exit = async () => {
    const result = await fetch(`${server}/user/logout`, {
      method: "GET",
      credentials: "include",
    });
    const log = await result.json();
    if (log.success) {
      setAuth(false);
      toast.success("logout");
    } else {
      toast.error("error");
    }
  };

  
  if (!auth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="text-xl  shadow-md h-16 items-center flex justify-between ">
      <li className="list-none mx-10 font-black text-2x font-sans">{user}</li>

      <li className="list-none mx-10">
        <button onClick={exit}>
          <img className="h-12" src={logout} alt="" />
        </button>
      </li>
    </div>
  );
};

export default Navbar;
