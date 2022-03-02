import "bootstrap/dist/css/bootstrap.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Components/Graph";
import SectorDiagram from "./SectorDiagram";
import Tag from "./Tag";
import { lightBlue } from "@mui/material/colors";

function TopComponents(){
    return (
        <Row>
            <Col style={{marginRight: "0px"}}>
                <Graph/>
            </Col>
            <Col>
                <Row style={{ marginBottom: "20px" }}>
                    <SectorDiagram/>
                </Row>
                <Row>
                    <Col style={{ paddingRight: "0px", paddingLeft: "0px", marginRight: "10px"}}>
                        <div className="card">
                            <Tag text="Overview"/>
                        </div>
                    </Col>
                    <Col style={{ paddingRight: "0px", paddingLeft: "0px", marginLeft: "10px"}}>
                        <div className="card" >
                            <Tag text="Goal"/>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TopComponents




