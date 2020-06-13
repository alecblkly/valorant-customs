import React, { useState } from 'react';

function SidearmSelect() {
   const sidearms = ['Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff'];
   const [sidearm, setSidearm] = useState();

   return (
      <div className="random-gun">
         <h2 className="gun-type">Sidearms</h2>
         <p className="chosen-gun">Selected Sidearm</p>
         <p className="chosen-gun">{sidearms[sidearm]}</p>
         <button
            onClick={() =>
               setSidearm(Math.floor(Math.random() * sidearms.length))
            }
         >
            Select Sidearm
         </button>
      </div>
   );
}

export default SidearmSelect;
