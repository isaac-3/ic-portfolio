import React from "react";

const Contact = () => {
  return (
    <div className="contacts-container" id="contact">
      <div className="contact-links">
        <h1>CONTACT</h1>
        {/* <div className="contact-icon-email">
          <i
            className="fa fa-envelope-o"
            id="email-icon"
            onClick={() =>
              window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")
            }
          ></i>
          <span>isaacgc0596@gmail.com</span>
          <br />
        </div> */}
        <div className="holder">
          <div className="btn a">
            <i
              className="fa fa-envelope-o email-icon"
              onClick={() =>
                window.open("mailto:isaacgc0596@gmail.com?subject=Hello!")
              }
            ></i>
          </div>
          <span>isaacgc0596@gmail.com</span>
        </div>
        <div className="btn b">
          <i
            className="fa fa-phone phone-icon"
            // id="phone-icon"
            onClick={() => window.open("tel:2819355556")}
          ></i>
          {/* <span>(281) 935-5556</span> */}
        </div>
        <div className="btn c">
          <i
            className="fa fa-linkedin-square linkedin-icon"
            // id="linkedin-icon"
            onClick={() => window.open("https://www.linkedin.com/in/isaac-c0/")}
          ></i>
          {/* <span>Connect With Me</span> */}
          <br />
        </div>
        <h1>RESUME</h1>
        <div className="btn d">
          <i
            className="fa fa-file-o"
            // id="resume"
            onClick={() => console.log("sd")}
          ></i>
          {/* <span>View My Resume</span> */}
        </div>
      </div>
      <div className="contact-form">
        <div className="form-title">
          <h1>Get In Touch</h1>
        </div>
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label className="label">Name</label>
          <input
            required
            className="input"
            type="text"
            placeholder="First Last"
            name="name"
          />
          <br />
          <br />
          <label className="label">Email</label>
          <input
            required
            className="input"
            type="email"
            placeholder="ex@example.com"
            name="email"
          />
          <br />
          <br />
          <label className="label">Message</label>
          <textarea
            required
            className="input"
            id="message-box"
            placeholder="Enter Message"
            name="message"
          />
          <br />
          <br />
          <button className="red" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
