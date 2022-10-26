import React, { useState } from 'react';

const NFTradeLogo = "/images/NFTradeLogo.svg"
const driplLogo = "/images/DriplLogo.svg"

export default function DemonCall() {
  const [NFTradeActive, setNFTradeActive] = useState(false);
  const [DriplActive, setDriplActive] = useState(false);

  return (
    <div id="DemonCall">
      {/* <div className="DemonBanner">
        DESIGN
      </div> */}
      <div className="SiteCards">
        <div className="SiteCard" 
        onMouseEnter={() => setNFTradeActive(true)} 
        onMouseLeave={() => setNFTradeActive(false)}
        >
          <div className="SCText">NF<strong>Trade</strong></div>
          <img src={NFTradeLogo} alt="NFTrade Logo" className={NFTradeActive ? "ActiveImage" : "InactiveImage"} />
        </div>
        
        <div className="SiteCard" 
        onMouseEnter={() => setDriplActive(true)} 
        onMouseLeave={() => setDriplActive(false)}
        >
          <div className="SCText">Dripl</div>
          <img src={driplLogo} alt="Dripl Logo" className={DriplActive ? "ActiveImage" : "InactiveImage"} />
        </div>
      </div>
    </div>
  );
}
