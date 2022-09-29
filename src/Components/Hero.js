const clone = "images/HeroImageFull.png";

export default function Hero() {
  return (
    <div id="Hero">
      <div className="HeroInfo">
        <h3>A showcase of my creative work</h3>
        <h2>LAURIER <strong>ST-AUBIN</strong></h2>
        <p>I love art, music, and technology. 
          I am currently living in Canada, 
          but I am looking to relocate to the metaverse. 
          I can help you design and implement your website. 
          I can make art and music for you. 
          I can help bring your creative vision to the next level. 
          Reach out to me!
        </p>
      </div>
      <img src={clone} alt="Clone" className="CloneImage"></img>
    </div>
  );
}
