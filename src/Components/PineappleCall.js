import React, { Link } from 'react-scroll';

const entrepot = "/images/Entrepot.jpg"
const entrepotLink = "https://open.spotify.com/album/2gvogKo3QKkOcuCGSh9Pon"
const lowEndFuture = "/images/LowEndFuture.jpg"
const lowEndFutureLink = "https://open.spotify.com/album/5bJxTLj3toVunHmrLqrwXo"


export default function PineappleCall() {
  return (
    <div id="PineappleCall">
      <div className="Albums">
        <a href={entrepotLink} target={"blank"}>
          <img src={entrepot} alt="Entrepot Album" className="Album" />
        </a>
        <a href={lowEndFutureLink} target={"blank"}>
          <img src={lowEndFuture} alt="Low End Future Album" className="Album" />
        </a>
      </div>
      <div className="PineappleAction">
        <p className="PText"><em>Currently available for bookings</em></p>
        <div className="BookButtonOuter">
          <div className="BookButton">
            <h4>
              <Link activeClass="activeMenu" to="Contact" spy={true} smooth={true} offset={50} duration={500} >Bookings</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
