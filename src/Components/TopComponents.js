import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Components/Graph";
import SectorDiagram from "./SectorDiagram";
import Overview from "./Overview";
import Goal from "./Goal";
import Icon from "./Icon";

function TopComponents() {
  return (
    <Row>
      <Col
        className="col-sm-7"
        style={{ marginRight: "0px", paddingRight: "0px", paddingLeft: "0px" }}
      >
        <Graph />
      </Col>
      <Col
        name
        className="col-sm-5"
        style={{ marginRight: "0px", paddingRight: "0px", paddingLeft: "10px" }}
      >
        <Row
          name="sectorDiagram box"
          style={{
            marginBottom: "14px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
          className="card"
        >
          <Col>
            <span>
              <a
                style={{ float: "right", fontStyle: "italic" }}
                href="https://investorjunkie.com/create-asset-allocation/"
              >
                See how the pros does it
              </a>
            </span>
            <span name="tedt" style={{ float: "right" }}>
              <Icon info />
            </span>
          </Col>
          <Col style={{ paddingLeft: "0px" }}>
            <SectorDiagram />
          </Col>
        </Row>
        <Row
          name="overview and goal"
          style={{ marginTop: "14px", marginLeft: "0px", marginRight: "0px" }}
        >
          <Col
            name="overview Card"
            className="card"
            style={{
              paddingLeft: "10px",
              paddingRight: "0px",
              marginRight: "7px",
            }}
          >
            <Overview />
          </Col>
          <Col
            name="goal Card"
            className="card"
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              marginLeft: "0px",
            }}
          >
            <Goal goal="100000" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TopComponents;
