import React, { useState } from 'react';

// const clone = "images/HeroImageFull.png";
const twitter = "images/Twitter.svg";
const instagram = "images/Instagram.svg";
const behance = "images/Behance.svg";
const gitHub = "images/GitHub.svg";

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <div id="Contact">
      <div className="FinalPage">
        <div className="LeftContact">
          <div className="Socials">
            <img src={twitter} alt="Twitter Logo" className="SocialLogo" />
            <img src={instagram} alt="nstagram Logo" className="SocialLogo" />
            <img src={behance} alt="Behance Logo" className="SocialLogo" />
            <img src={gitHub} alt="GitHub Logo" className="SocialLogo" />
          </div>
          <div className="ContactInfo">
            <h3>Feel free to reach out!</h3>
            <h2>LAURIER <strong>ST-AUBIN</strong></h2>
            <p>Contact me using the form, or through DMs</p>
          </div>
        </div>
        <div className="RightContact">
          <div className="ContactText">CONTACT</div>
          <form className="ContactForm" onSubmit={handleSubmit}>
            <label className="FormLabel">Name</label>
            <input className="FormInput" type="text" name="user_name"/>
            <label className="FormLabel">Email</label>
            <input className="FormInput" type="email" name="user_email" />
            <label className="FormLabel">Subject</label>
            <input className="FormInput" type="subject" name="user_subject" />
            <label className="FormLabel">Message</label>
            <textarea className="FormInput TextArea" name="message" />
            <input className="FormButton" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      {/* <img src={clone} alt="Clone" className="ContactImage"></img> */}
    </div>
  );
}
