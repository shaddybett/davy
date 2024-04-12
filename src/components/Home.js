import React from "react";
import { Button } from "flowbite-react";
import logo from "../assets/images/postgresql.svg";
import fuel from "../assets/images/pxfuel (3).jpg";
import "./home.css";

function Home() {
  return (
    <div className="body">
      <div className="flex justify-center items-center flex-col">
       
        <img src={logo} alt="logo" className="w-10 mb-2" />
      
        <img src={fuel} alt="pxl" className="w-300 h-80" />

        <p className=" max-w-2xl">
          heloo This is a cool web site to address all issues (including
          breaking changes), run: hhjkdujdsnjjuuh
        </p>
        
      </div>
      <div className=" ">

      </div>
    </div>
  );
}

export default Home;
