import React from "react";

function SelectImageIcon( {isListvisible} ) {

return (
    <button type='button' style={{border: 0, backgroundColor: 'transparent', paddingTop: '0px'}} onClick={() => isListvisible()}> <img src="images/SelectImageIcon.svg" alt="SelectImgBtn"/>
    </button>
  );
}

export default SelectImageIcon;