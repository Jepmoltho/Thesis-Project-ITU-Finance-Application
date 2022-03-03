import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Components/Graph";
import SectorDiagram from "./SectorDiagram";
import Overview from "./Overview";
import Goal from "./Goal";


function TopComponents(){
    return (
        <Row>
            <Col style={{marginRight: "0px"}}>
                <Graph/>
            </Col>
            <Col>
                <Row style={{ marginBottom: "20px" }} className="card">
                    <Col>
                          <span> 
                            <a style={{ float: "right", fontStyle: "italic"}} href="https://investorjunkie.com/create-asset-allocation/">
                                See how the pros does it
                            </a> 
                        </span>
                        <span style={{ float: "right"}}> logo </span>                      
                    </Col>

                    <Col style={{padding: "0px"}}>
                        <span>
                            <SectorDiagram/>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className="card" style={{ paddingRight: "0px", paddingLeft: "0px", marginRight: "10px"}}>
                        <Overview/>
                    </Col>
                    <Col className="card" style={{ paddingRight: "0px", paddingLeft: "0px", marginLeft: "10px"}}>
                        <Goal/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TopComponents




