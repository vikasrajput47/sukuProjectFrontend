import React, { useContext, useState } from "react";
import bgImage from "./img/img1.jpg";
import { data } from "./data/data";
import { Context } from "..";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./img/logo1.png";
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/clients.png'
const Home = () => {
  const { auth } = useContext(Context);
  const arr = [
    {
      first: "Round the clock service",
      second: img1,
      third:
        "We provide around the clock service and are available on the phone",
    },
    {
      first: "Groomed and well trained staff",
      second: img2,
      third:
        "Our drivers and supervisors are well trained, groomed and always in proper uniform. We cater to international MNCs as well",
    },
    {
      first: "Best services at affordable prices",
      second: img3,
      third:
        "We give the most competitive rates in the industry and our terms are customized to use to suit the requirement of each client",
    },
    {
      first: "Professional, Hassel Free Services",
      second: img4,
      third:
        "We aim to fulfill all customer needs. We adhere to the highest professional standards and ensure the best service to our clients",
    },
    {
      first: "Customer engagement",
      second: img5,
      third:
        "We believe in continuous improvement by listening to our customers. We value feedback and incorporate it to give personalized solutions",
    },
  ];
  const [filterValue, setFilterValue] = useState("");

  const filteredData = data.filter((item) =>
    item.vehicleNo.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <Navbar />
      <div className="mt-5 mx-5">
        <img
          className="shadow-md w-full h-64 md:h-80 lg:h-96 xl:h-90 max-h-screen"
          src={bgImage}
          alt=""
        />

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 mx-auto border shadow space-y-8 md:space-x-8 md:space-y-0">
          <div className="mb-8 md:mb-0 md:mr-8 text-center">
            <img className="h-72 mx-10 md:hidden block" src={logo} alt="" />
            <img className="h-72 mx-10 hidden md:block" src={logo} alt="" />
          </div>
          <div className="w-full md:w-2/3 mx-auto my-10 p-8 bg-white rounded text-center md:text-left">
            <p className="text-4xl font-bold">
              WELCOME TO TRIDENT 3T MARKETING
            </p>
            <p className="mt-5">
              Trident 3T Marketing is a company specializing in car and cab
              services. With a commitment to providing reliable transportation
              solutions, the company has made its mark in the industry. Whether
              you're looking for a convenient taxi ride or need a reliable cab
              service, Trident 3T Marketing aims to meet your transportation
              needs efficiently.
            </p>
          </div>
        </div>
        <div className="mx-5 my-10 shadow border flex flex-col items-center justify-center">
          <div className="text-2xl font-bold my-5">Why Choose Us?</div>
          <div className="flex flex-wrap justify-center">
            {arr.map((item, key) => (
              <div
                key={key}
                className="hover:bg-red-500 hover:text-white border w-full md:w-96 my-5 md:mx-5 p-5 bg-white rounded-md"
              >
                <p className="text-xl font-bold mb-2">{item.first}</p>
                <div>
                  <img
                    className="w-full h-auto mb-2 "
                    src={item.second}
                    alt=""
                  />
                </div>
                <p>{item.third}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 shadow-md border mx-5">
        <p className="my-5 text-slate-600 text-center text-3xl font-bold">
          Choose from our FLEET SIZE 250+ cars
        </p>
        <div className="flex flex-col lg:flex-row justify-around items-center ">
          <div className="lg:w-1/2 text-2xl mb-4 lg:mb-0 hidden md:block">
            <li>
              Our fleet consists of 257 well-maintained and regularly serviced
              cars of various brands
            </li>
            <li>Available in NCR/Haryana/Rajasthan</li>
            <li>24x7 Round the clock service</li>
          </div>
          <div>
            <img className="h-96" src={img6} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-10 shadow-md border mx-5">
        <p className="my-5 text-slate-600 text-center text-3xl font-bold">
          Some of our clients
        </p>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="lg:w-1/2 text-lg mb-4 lg:mb-0">
            <ul className="list-none pl-4 ">
              <li>&#8226;HITACHI HITACHI ASTEMO FIE PVT. LTD</li>
              <li>&#8226;NGK SPARK PLUGS (INDIA) PVT. LTD</li>
              <li>&#8226;UFI FILTERS INDIA PVT. LTD</li>
              <li>&#8226;RANE NSK STEERING SYSTEMS PRIVATE LIMITED</li>
              <li>&#8226;NPR AUTO PARTS MANUFACTURING INDIA PVT. LTD.</li>
              <li>&#8226;ASHIMORI INDIA PVT LTD</li>
              <li>&#8226;NICHIAS INDUSTRIAL PRODUCTS PVT LTD.</li>
            </ul>
            <a
              rel='noreferrer'
              className="block text-center mt-4 text-blue-800 font-medium hover:underline"
              href="https://firebasestorage.googleapis.com/v0/b/sukurullaproject.appspot.com/o/more.png?alt=media&token=349929c0-1ba0-467e-afba-59fb0460af51"
              target="_blank"
            >
              View More
            </a>
          </div>
          <div className="hidden md:block">
            <img className="h-96" src={img7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
