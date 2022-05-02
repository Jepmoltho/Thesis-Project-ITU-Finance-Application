import "bootstrap/dist/css/bootstrap.css";
import Tag from "./Tag";
import ProgressBar from "./ProgressBar";
import Icon from "./Icon";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Goal(props) {

  function goalCalculation(){
    if ((props.goal === undefined || '') || props.netWorth <= 0 ){
      return "0"
    } else if (props.goal <= props.netWorth) {
      return "100"
    } else {
      // Del av tallet / Det hele tallet * 100 = (x) %
      const progress = props.netWorth / props.goal * 100
      const progressDecimals = progress.toFixed(2)
      return progressDecimals.toString()
    }
  }

  return (
    <div className="goalbox">
      <Row style={{ padding: "10px" }}>
        <Col style={{}}>
          <Tag inline text="Goal" style={{ display: "inline" }} />
          <Icon infosmall style={{ position: "relative", top: "-10px" }} />
          <Icon 
            editgoal style={{ position: "relative", float: "right" }} 
            eventEdit={props.eventEdit} 
          />
        </Col>
      </Row>
      <Row style={{ padding: "20px 10px 10px 10px" }}>
        <Col>
          <p style={{ color: "#00145E", float: "left", marginBottom: "7px" }}>
            Goal
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          > {props.goal === undefined || '' ? "-" : props.goal}
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "10px", paddingBottom: "20px" }}>
        <ProgressBar completed={goalCalculation()} style={{ position: "relative" }} />
      </Row>
    </div>                      
  );
}

export default Goal;

// {props.goal === undefined ? "-" : props.goal}

