import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Components/Graph";
import SectorDiagram from "./SectorDiagram";
import Overview from "./Overview";
import Goal from "./Goal";
import Seehowpros from "./Seehowpros";

function TopComponents(props) {

  return (
    <Row>
      <Col
        className="col-sm-7"
        style={{ marginRight: "0px", paddingRight: "0px", paddingLeft: "0px" }}
      >
        <Graph 
          historicNetworth={props.historicNetworth}
          networth={props.netWorth}
        />
      </Col>
      <Col
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
          <Col style={{ paddingLeft: "0px" }}>
            <Seehowpros />
            <SectorDiagram 
              categories={props.categories}
              netWorth={props.netWorth}

            />
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
            <Overview
              assetsTotal={props.assetsTotal}
              debtTotal={props.debtTotal}
              netWorth={props.netWorth}
            />
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
