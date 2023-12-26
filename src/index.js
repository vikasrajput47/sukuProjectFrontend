import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext();
const AppWrapper = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const server = "https://sukuprojectbackend-production.up.railway.app";
  // const server = "http://localhost:5000";
  const [loading, setLoading] = useState(true);
  return (
    <Context.Provider
      value={{
       
        auth,
        setAuth,
        user,
        setUser,server,
        loading,setLoading
      }}
    >
      <App />
    </Context.Provider>
  );
};
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
