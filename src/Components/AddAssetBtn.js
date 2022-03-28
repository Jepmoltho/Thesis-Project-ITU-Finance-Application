import React from 'react';


function AddAssetBtn(props){

    return (
        <button type='button' style={{border: 0, backgroundColor: 'transparent', paddingTop: '0px'}} onClick={props.event1}> <img src="images/AddAssetBtn.svg" alt="AddAssetBtn"/></button>
        );
    }
    
    export default AddAssetBtn;
    