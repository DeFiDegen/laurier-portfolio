const video = '/videos/LordGigabrain.mp4'

export default function MaisonLaurierHero() {
  return (
    <div id="MaisonLaurierHero">
        <video className="MaisonVideo" src={video} autoPlay loop muted></video>
      <div className="MaisonBanner">
        <div className="MBContent">
          <h4>Maison</h4>
          <h5>LAURIER</h5>
        </div>
        <p className="MLText">HIGH QUALITY unique prints, 
          digital art, and customized sneakers 
          sold as NFTs on the Ethereum blockchain.
        </p>
      </div>
    </div>
  );
}
