import React, { useState } from 'react';

const NFTradeLogo = "/images/NFTradeLogo.svg"
const driplLogo = "/images/DriplLogo.svg"
const tartareFinanceLogo = "/images/TartareFinanceLogo.svg"

export default function DemonCall() {
  const [NFTradeActive, setNFTradeActive] = useState(false);
  const [DriplActive, setDriplActive] = useState(false);
  const [TartareFinanceActive, setTartareFinanceActive] = useState(false);

  return (
    <div id="DemonCall">
      <div className="DemonBanner">
        DESIGN
      </div>
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

        <div className="SiteCard" 
        onMouseEnter={() => setTartareFinanceActive(true)} 
        onMouseLeave={() => setTartareFinanceActive(false)}
        >
          <div className="SCText">TartareFinance</div>
          <img src={tartareFinanceLogo} alt="TartareFinance Logo" className={TartareFinanceActive ? "ActiveImage" : "InactiveImage"} />
        </div>
      </div>
      <div>
        <p><em>Please reach out if you want to collaborate</em></p>
        <div className='ReachButton'></div>
      </div>
    </div>
  );
}
