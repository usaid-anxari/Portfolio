import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");
  // handelSubmit

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success(result)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(result)
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so fell free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ausaid109@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+92-31427-59457</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Karachi,Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter Your Name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" placeholder="Enter Your Email" name="email" required/>
          <label htmlFor="message">Enter Your Message Here</label>
          <textarea
          required
            placeholder="Enter Your Message"
            name="message"
            id="message"
            rows="8"></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
