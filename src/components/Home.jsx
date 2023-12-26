import React, { useContext, useState } from "react";
import bgImage from "./img/img.jpg";
import { data } from "./data/data";
import { Context } from "..";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const { auth, } = useContext(Context);
  const [filterValue, setFilterValue] = useState("");

  const filteredData = data.filter((item) =>
    item.vehicleNo.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (

        <>
          <Navbar />
          <div className="mt-10 mx-10">
            <img
              className="rounded-md shadow-md w-full h-64 md:h-80 lg:h-96 xl:h-90 max-h-screen"
              src={bgImage}
              alt=""
            />
            <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl w-2/3 font-black text-white z-10">
              3T Logistics
            </h1>

            <div className="relative z-0">
              <div className="overflow-x-auto mt-10 border border-white">
                <input
                  type="text"
                  placeholder="Filter by Vehicle No"
                  className="p-2 m-2 border border-gray-300 rounded"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-r text-center">
                        S.No
                      </th>
                      <th className="py-2 px-4 border-b border-r text-center">
                        Vehicle.No
                      </th>
                      <th className="py-2 px-4 border-b border-r text-center">
                        Issue Date
                      </th>
                      <th className="py-2 px-4 border-b border-r text-center">
                        Valid Upto
                      </th>
                      <th className="py-2 px-4 border-b text-center">
                        Complete Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-300">
                        <td className="py-2 px-4 border-b border-r text-center">
                          {index + 1}.
                        </td>
                        <td className="py-2 px-4 border-b border-r text-center">
                          {item.vehicleNo}
                        </td>
                        <td className="py-2 px-4 border-b border-r text-center">
                          {item.date}
                        </td>
                        <td className="py-2 px-4 border-b border-r text-center">
                          {item.validUpto}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          <img
                            src={item.imageLink}
                            alt={`Vehicle ${index + 1}`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
     
  );
};

export default Home;
