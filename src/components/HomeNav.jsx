import React from "react";
import logo from "./img/logo1.png";

const HomeNav = () => {
  return (
    <div className="text-xl  shadow-md h-auto md:h-20 items-center flex flex-col md:flex-row justify-between p-4">
      <div className="md:flex items-center">
        <li className="list-none mx-4 md:mx-10 text-2xl flex items-center">
          <img src={logo} className="h-12" alt="" />
          <strong className="mx-2 md:mx-6 text-pink-600">
            Trident 3T Marketing
            <p className="text-sm md:text-base text-black md:hidden text-center">A ride that takes you further</p>
          </strong>
        </li>
      </div>

      {/* Hide the welcome section on mobile screens */}
      <div className="hidden md:flex items-center mt-4 md:mt-0">
        <li className="list-none text-center">
          <strong className="text-lg md:text-2xl">WELCOME TO TRIDENT</strong>
          <h3 className="text-sm md:text-base">
            A ride that takes you further
          </h3>
        </li>
      </div>
    </div>
  );
};

export default HomeNav;
