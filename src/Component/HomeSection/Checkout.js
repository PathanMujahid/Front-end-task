import { Container } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <>
      <Container className="sec-Container">
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <h1 className="headings">
            Stay Safe With{" "}
            <span className="newtextcolor">
              Contactless <br />
              Checkout
            </span>
          </h1>
        </div>
        <div className="identifyItems">
          <div className="col-xs-12">
            <h1 style={{ fontFamily: "Poppins, Medium", fontSize: "22px" }}>
              Speed through checkout <br />
              safely with your phone
            </h1>
            <p className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat
              lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
              odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
              euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare
              massa eget egestas purus viverra.
            </p>
          </div>
          <div className="col-xs-12">
            <img
              src="https://i.postimg.cc/wTLVPmmK/Group-8260-2x.png"
              alt="redbull"
              className="img-fluid"
              style={{
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
