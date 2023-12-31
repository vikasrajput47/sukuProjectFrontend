import React, { useContext } from "react";
import logout from "./img/logout.png";
import { Navigate, Link } from "react-router-dom";
import logo from "./img/logo1.png";
import toast from "react-hot-toast";
import { Context } from "..";
import img8 from "./img/7.png";

const Navbar = () => {
  const { user, auth, setAuth, server } = useContext(Context);

  const exit = async () => {
    const result = await fetch(`${server}/user/logout`, {
      method: "GET",
      credentials: "include",
    });
    const log = await result.json();
    if (log.success) {
      setAuth(false);
      toast.success("Logout");
    } else {
      toast.error("Error");
    }
  };

  if (!auth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="text-xl shadow-md h-20 md:h-20 flex justify-between items-center p-4">
      <div className="flex items-center ">
        <strong className="hidden md:block">{user}</strong>
        <button onClick={exit}>
          <img className="h-12 mx-5" src={logout} alt="Logout" />
        </button>
      </div>

      <div className="flex justify-center items-center">
        <input
          className="border border-slate-700 "
          type="text"
          placeholder="Vehicle no."
        />
        <button>
          <img className="h-8" src={img8} alt="" />
        </button>
        <Link to="/" className="mx-4 text-2xl text-italic hidden md:block">
          <img src={logo} className="h-12" alt="Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
