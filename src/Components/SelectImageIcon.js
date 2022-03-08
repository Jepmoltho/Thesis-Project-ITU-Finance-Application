function SelectImageIcon() {
  function myFunction() {
    console.log("CLICKED");
  };

return (
  <button type='button' style={{border: 0, backgroundColor: 'transparent', paddingTop: '0px'}} onClick={myFunction}> <img src="images/SelectImageIcon.svg" alt="SelectImgBtn"/></button>
  );
}

export default SelectImageIcon;