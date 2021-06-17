import React, { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CompanyName from "../companyName/index";

import "./style.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleLinkSubmit = (e) => {
    if(name === "admin" || name === "Admin") {
      e.preventDefault();
      toast.error("Please choose a different Username!", {
        autoClose: 2000,
        pauseOnHover: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (name === "" || room === "") {
      e.preventDefault();
      toast.error("Please fill all the fields!", {
        autoClose: 2000,
        pauseOnHover: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="mainHeader">
        <p className="mainHeader__para">
          Welcome to {<CompanyName></CompanyName>} &#128172;. Connect to your
          favorite ones &#128525; with {<CompanyName></CompanyName>}.
        </p>
      </div>
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <form autoComplete="false">
          <input
            type="text"
            placeholder="Enter Your username"
            className="joinInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Room Name"
            className="joinInput"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <Link
            onClick={handleLinkSubmit}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button type="submit" className="joinBtn">
              Join Room<span>&#128073;</span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
