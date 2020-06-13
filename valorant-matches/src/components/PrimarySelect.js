import React, { useState } from 'react';

function PrimarySelect() {
   const primaryWeapon = [
      'Stinger',
      'Spectre',
      'Bulldog',
      'Guardian',
      'Phantom',
      'Vandal',
      'Bucky',
      'Judge',
      'Ares',
      'Odin',
      'Marshal',
      'Operator',
   ];
   const [primary, setPrimary] = useState(0);

   return (
      <div className="random-gun">
         <h2 className="gun-type">Primary Weapon</h2>
         <p className="chosen-gun">Selected Weapon</p>
         <p className="chosen-gun">{primaryWeapon[primary]}</p>
         <button
            onClick={() =>
               setPrimary(Math.floor(Math.random() * primaryWeapon.length))
            }
         >
            Select Primary
         </button>
      </div>
   );
}

export default PrimarySelect;
