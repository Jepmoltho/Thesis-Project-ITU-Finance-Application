function OnboardingBubble(props){
    const { text } = props;

    return(
        <div className="OnboardingBubble">
            <p> {props.text} </p>
        </div>
    );
}

export default OnboardingBubble;
