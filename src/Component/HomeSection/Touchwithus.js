import React, { useState } from "react";

const Touchwithus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    if (name.length < 4 || message.length < 4) {
      setError("Name and message should be at least 4 characters long");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Form data is valid, make API call
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Replace the API_ENDPOINT with your actual API endpoint
    const API_ENDPOINT = "https://example.com/api";
    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Handle the response from the API if needed
        console.log(response);
        setSuccessMessage("Form submitted successfully");
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
        setSuccessMessage("Thank You for Submit");

        setTimeout(() => {
          // Clear the success message after 1 second
          setSuccessMessage("");
        }, 5000);
      });

    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <>
      <div className="contactUs">
        <div>
          <h1 className="headings">
            Get In Touch
            <span className="newtextcolor">With Us </span>
          </h1>
        </div>
        <div>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Poppins, Regular",
              color: "#888888",
            }}
          >
            Fill in the form, or if you’d like to, you can also shoot us an
            email <br />
            (Tip: include your phone # for a quicker response)
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              width: "100%",
            }}
            className="form"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={{
              width: "100%",
            }}
            className="form"
            variant="standard"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            style={{
              width: "100%",
              height: "150px",
              padding: "12px 20px",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: " 4px",
              fontSize: "16px",
            }}
            className="formtextarea"
            variant="standard"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}

          <div style={{ paddingTop: "10px" }}>
            <button className="btns" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Touchwithus;
