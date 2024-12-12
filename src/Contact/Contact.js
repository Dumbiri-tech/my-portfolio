import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34aec1b2-fc3a-4338-b0f1-09ab95ae5623");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      // setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
        <p className="splash">💦</p>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Lets talk</h2>
          <p className="text">
            im currently available to take on new projects,so if you have
            anything you want me to work on. You can contact me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>📩</p> <p>dumbirisamuelolanrewaju@gmail.com</p> <p></p>
            </div>
            <div className="contact-detail">
              <p>☎️</p> <p>+234-9053-176-350</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="">Write your message here </label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
