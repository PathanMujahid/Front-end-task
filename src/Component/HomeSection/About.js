import { Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Container className="sec-Container">
        <div className="identifyItems">
          <div className="col-xs-12">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/m2Zw0Mdn/pexels-pixabay-260689-2x.png"
              alt="redbull"
              style={{
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
          <div className="col-xs-12">
            <h1 className="headings">
              Identify any item
              <br />
              <span className="newtextcolor">
                and releted info.
                <br />
                on your phone
              </span>
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
        </div>
      </Container>
    </>
  );
};

export default About;
