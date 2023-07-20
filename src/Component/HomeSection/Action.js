import React from "react";

const Homesec4 = () => {
  return (
    <div className="">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div
              style={{
                textAlign: "center",
                fontFamily: "Montserrat, Bold",
                marginTop: "6rem",
              }}
            >
              <h1 className="headings">
                Our App <span className="newtextcolor">In Action</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://i.postimg.cc/PJFTG5V9/Group-8208-2x.png"
                alt="img"
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec4;
