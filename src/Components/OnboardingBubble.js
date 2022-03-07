function OnboardingBubble(props){
    const { text } = props;

    return(
        <div className="OnboardingBubble">
            <p style={{display: 'tableCell',verticalAlign: 'middle'}}> {props.text} </p>
        </div>
    );
}

export default OnboardingBubble;
