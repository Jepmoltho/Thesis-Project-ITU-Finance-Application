import React from 'react';


function AddAssetBtn(){

    function myFunction() {
        console.log("CLICKED");
    };

    return (
        <button type='button' style={{border: 0, backgroundColor: 'transparent', paddingTop: '0px'}} onClick={myFunction}> <img src="/AddAssetBtn.svg" alt="AddAssetBtn"/></button>
        );
    }
    
    export default AddAssetBtn;
    