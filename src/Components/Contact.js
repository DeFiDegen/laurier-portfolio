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
          <form onSubmit={handleSubmit} className="ContactForm">
            <div>
              <label className="FormLabel">First Name</label>
              <input type="text" name="user_first_name" className="FormInput"/>
              <label>Last Name</label>
              <input type="text" name="user_last_name" />
            </div>
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Subject</label>
            <input type="subject" name="user_subject" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      {/* <img src={clone} alt="Clone" className="ContactImage"></img> */}
    </div>
  );
}
