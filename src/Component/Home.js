import React from "react";
import "../Styling/App.css";
import "../Styling/Home.css";
import IdentifyItem from "./HomeSection/IdentifyItem";
import Checkout from "./HomeSection/Checkout";
import Action from "./HomeSection/Action";
import About from "./HomeSection/About";
import Touchwithus from "./HomeSection/Touchwithus";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="main">
          <div>
            <h1 className="headings, newtextcolor ">
              Object Detection
              <br />
              <span style={{ color: "black" }}>System</span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <button style={{ marginTop: "15px" }} className="btns">
              Get App
            </button>
          </div>
        </div>
      </div>
      <IdentifyItem />
      <Checkout />
      <Action />
      <About />
      <Touchwithus />
    </>
  );
};

export default Home;
