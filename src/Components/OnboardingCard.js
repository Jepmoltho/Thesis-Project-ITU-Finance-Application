function OnboardingCard (props){
    const {title, text, primaryBtnTxt, secondaryBtnTxt} = props;
    // Make styling 
    //  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);


    return(
        <div className='onboardingCard' style={{color:'white', textAlign:'center', width:492, height:452, fontWeight: 'bold'}}>
            <h1 style={{paddingTop:100, fontWeight: 'bold', fontSize:26}}> {props.title} </h1>
            <p style={{paddingTop: 28, fontSize:16, fontWeight: 'semibold'}}> {props.text} </p>
            <button className='walkthroughBtn'> {props.primaryBtnTxt} </button>
            <button className='skipWalkthroughBtn'> {props.secondaryBtnTxt} </button>
        </div>
    );
}

export default OnboardingCard; 