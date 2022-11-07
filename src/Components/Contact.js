const twitter = "images/Twitter.svg";
const instagram = "images/Instagram.svg";
const behance = "images/Behance.svg";
const gitHub = "images/GitHub.svg";

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactPayload = {};
    contactPayload["name"] = event.target["user_name"].value;
    contactPayload["email"] = event.target["user_email"].value;
    contactPayload["subject"] = event.target["user_subject"].value;
    contactPayload["message"] = event.target["message"].value;
    console.log(contactPayload);
  }

  return (
    <div id="Contact">
      <div className="FinalPage">
        <div className="LeftContact">
          <div className="Socials">
            <a href='https://twitter.com/SeksiDemon' target={"blank"}>
              <img src={twitter} alt="Twitter Logo" className="SocialLogo" />
            </a>
            <a href='https://www.instagram.com/maison.laurier/' target={"blank"}>
              <img src={instagram} alt="Instagram Logo" className="SocialLogo" />
            </a>
            <a href='https://www.behance.net/defidegen' target={"blank"}>
              <img src={behance} alt="Behance Logo" className="SocialLogo" />
            </a>
            <a href='https://github.com/DeFiDegen/' target={"blank"}>
              <img src={gitHub} alt="GitHub Logo" className="SocialLogo" />
            </a>
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
    </div>
  );
}
