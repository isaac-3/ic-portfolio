import React from "react";

const Contact = () => {
  return (
    <div className="contacts-container" id="contact">
      <div className="contact-links">
        <h1>CONTACT</h1>
        <div className="contact-button-container">
          <div className="contact-button-icon a">
            <i
              className="fa fa-envelope-o email-icon"
              onClick={() =>
                window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")
              }
            ></i>
          </div>
          <span>isaacgc0596@gmail.com</span>
        </div>
        <div className="contact-button-container">
          <div className="contact-button-icon b">
            <i
              className="fa fa-phone phone-icon"
              onClick={() => window.open("tel:2819355556")}
            ></i>
          </div>
          <span>(281) 935-5556</span>
        </div>
        <div className="contact-button-container">
          <div className="contact-button-icon c">
            <i
              className="fa fa-linkedin-square linkedin-icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/isaac-c0/")
              }
            ></i>
          </div>
          <span>Connect With Me</span>
        </div>
        <h1>RESUME</h1>
        <div className="contact-button-container">
          <div className="contact-button-icon d">
            <i className="fa fa-file-o" onClick={() => console.log("sd")}></i>
          </div>
          <span>View My Resume</span>
        </div>
      </div>
      <div className="contact-form">
        <h1>Get In Touch</h1>
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label className="contact-input-label">Name</label>
          <input
            required
            className="contact-input"
            type="text"
            placeholder="First Last"
            name="name"
          />
          <br />
          <br />
          <label className="contact-input-label">Email</label>
          <input
            required
            className="contact-input"
            type="email"
            placeholder="ex@example.com"
            name="email"
          />
          <br />
          <br />
          <label className="contact-input-label">Message</label>
          <textarea
            required
            className="message-box"
            placeholder="Enter Message"
            name="message"
          />
          <br />
          <br />
          <button className="contact-form-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
