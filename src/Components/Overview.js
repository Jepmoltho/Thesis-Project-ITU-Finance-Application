import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import Icon from "./Icon";

function Overview() {
  return (
    <div className="overviewbox">
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <Tag inline text="Goal" style={{ display: "inline" }} />
          <Icon infosmall style={{ position: "relative", top: "-10px" }} />
        </Col>
      </Row>
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            Assets total
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            1500000 DKK
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "0px 10px 0px 10px" }}>
        <Col style={{ paddingLeft: "0px", paddingBottom: "0px" }}>
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            Debt total
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            1500000 DKK
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            <b>Networth</b>
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            <b>1500000 DKK</b>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Overview;
