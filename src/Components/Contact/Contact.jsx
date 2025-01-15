import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b5cb739-2cd6-4c75-a62c-01ee967f2841");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" >
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          details below. Your feedback, questions, and suggestions are important
          to us as we strive to provide exceptional service.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" /> Contact@Alok.dev
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" /> Sitamarhi Institute Of Technology (SIT), Sitamarhi...
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Your mobile number"
            name="phone"
            required
          />
          <label htmlFor="">Write Your message here</label>
          <textarea
            name="message"
            rows="6 "
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn">
            Submit now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
