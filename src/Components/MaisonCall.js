import React, { useState } from 'react';

export default function MaisonCall() {
  const [contactBlackActive, setContactBlackActive] = useState(false);

  return ( 
    <div id="MaisonCall">
      <p className="MCText"><strong>MAISON LAURIER</strong> is currently open for commissions</p>
      <div className="ButtonText"
      onMouseEnter={() => setContactBlackActive(true)}
      onMouseLeave={() => setContactBlackActive(false)}
      >
        <h4 className={contactBlackActive ? "black" : ""}>CONTACT</h4>
        <h5>LAURIER</h5>
      </div>
    </div>
  );
}
