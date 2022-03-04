import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";

function ProgressBar(props){
    const {completed} = props;


    //----Bar---//
    // The gray bar
    const containerStyles = {
        height: 5,
        width: '100%',
        backgroundColor: "#C4C4C4",
        borderRadius: 34,
        margin: 0,
        padding: 0, 
      }
      
      // Fills the bar out with darkBrandBlue
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#00145E',
        borderRadius: 'inherit',
      }
      
      //----TEXT---//
      // The text "Progress"
      const labelStyles = {
        color: '#00145E',
        fontWeight: 'bold',
        float: 'left',
        display: 'inline'
      }

      // Percentage of completion 
      const completedStyles = {
        color: '#00145E',
        fontWeight: 'bold',
        float: 'right',
        display: 'inline'
      }
      

    return (
        <div name="outer">
              <Row>
                <div name="text" style={{marginBottom: "5px", paddingBottom:"0"}}> 
                  <div name="Percentage" style={completedStyles}>{`${completed}%`}</div>
                  <div name="label" style={labelStyles}> Progress </div>
                </div>
              </Row>
              <Row style={{marginRight: "0px",marginLeft: "0px"}}>
                <div name="progressbar container" style={containerStyles }> 
                    <div name="filler" style={fillerStyles}/> 
                </div>
              </Row>


        </div>
    );
}

export default ProgressBar;
