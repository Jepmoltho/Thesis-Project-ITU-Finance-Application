function ProgressBar(props){
    const {completed} = props;

    const containerStyles = {
        height: 5,
        width: '100%',
        backgroundColor: "#C4C4C4",
        borderRadius: 34,
        margin: 50,
      }
      
      // fills the bar out with darkBrandBlue
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#00145E',
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: '#00145E',
        fontWeight: 'bold',
        float: 'left',
        display: 'inline'
      }

      const completedStyles = {
        padding: 5,
        color: '#00145E',
        fontWeight: 'bold',
        float: 'right',
        display: 'inline'
      }
      

    return (
        <div>
            <div style={labelStyles}> Progress </div>
            <div style={completedStyles}>{`${completed}%`}</div>
            <div style={containerStyles}> 
                <div style={fillerStyles}/> 
            </div>
        </div>
    );
}

export default ProgressBar;

/**
 Test element
 <ProgressBar completed='60'/>
*/