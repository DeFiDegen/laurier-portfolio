import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NFTradeLogo = "/images/NFTradeLogo.svg"
const driplLogo = "/images/DriplLogo.svg"
const tartareFinanceLogo = "/images/TartareFinanceLogo.svg"
const nfTradeLink = "https://www.figma.com/proto/TQabzbnCG7Jw7hyWl6SMmQ/NFTrade?node-id=106%3A2&scaling=min-zoom&page-id=105%3A15&starting-point-node-id=106%3A2&show-proto-sidebar=1"
const driplLink = "https://www.behance.net/gallery/149543683/Dripl-Design-Tile"
const tartareLink = "https://www.figma.com/proto/rZr6DMeWFMlfyedvH9PDFI/Tartare-Finance?node-id=11%3A406&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=11%3A406"

export default function DemonCall() {
  const [NFTradeActive, setNFTradeActive] = useState(false);
  const [DriplActive, setDriplActive] = useState(false);
  const [TartareFinanceActive, setTartareFinanceActive] = useState(false);

  return (
    <div id="DemonCall">
      {/* <div className="DemonBanner">
        DESIGN
      </div> */}

      <div className="SiteCards">
        <a href={nfTradeLink} target={'blank'} className="SiteCard" 
          onMouseEnter={() => setNFTradeActive(true)} 
          onMouseLeave={() => setNFTradeActive(false)}
        >
          <div className="SCText">NF<strong>Trade</strong></div>
          <img src={NFTradeLogo} alt="NFTrade Logo" className={NFTradeActive ? "ActiveImage" : "InactiveImage"} />
        </a>

        <a href={driplLink} target={'blank'} className="SiteCard" 
          onMouseEnter={() => setDriplActive(true)} 
          onMouseLeave={() => setDriplActive(false)}
        >
          <div className="SCText">Dripl</div>
          <img src={driplLogo} alt="Dripl Logo" className={DriplActive ? "ActiveImage" : "InactiveImage"} />
        </a>

        <a href={tartareLink} target={'blank'} className="SiteCard" 
          onMouseEnter={() => setTartareFinanceActive(true)} 
          onMouseLeave={() => setTartareFinanceActive(false)}
        >
          <div className="SCText">TartareFinance</div>
          <img src={tartareFinanceLogo} alt="TartareFinance Logo" className={TartareFinanceActive ? "ActiveImage" : "InactiveImage"} />
        </a>
      </div>
      <div>
        <p><em>Please reach out if you want to collaborate</em></p>
        <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className='ReachButton' >
          Reach Out
        </Link>
      </div>
    </div>
  );
}
