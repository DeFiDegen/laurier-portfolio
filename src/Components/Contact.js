const clone = "images/HeroImageFull.png";

export default function Contact() {
  return (
    <div id="Contact">
      <div className="ContactInfo">
        <h3>Feel free to reach out!</h3>
        <h2>LAURIER <strong>ST-AUBIN</strong></h2>
        <p>Contact me using the form, or through DMs</p>
      </div>
      <img src={clone} alt="Clone" className="CloneImage"></img>
    </div>
  );
}
