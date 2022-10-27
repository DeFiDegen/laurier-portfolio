const clone = "images/HeroImageFull.png";
const twitter = "images/Twitter.svg";
const instagram = "images/Instagram.svg";
const behance = "images/Behance.svg";
const gitHub = "images/GitHub.svg";

export default function Contact() {
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
          <div className="contactText">CONTACT</div>
        </div>
      </div>
      <img src={clone} alt="Clone" className="ContactImage"></img>
    </div>
  );
}
