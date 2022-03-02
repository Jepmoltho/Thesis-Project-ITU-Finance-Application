import "bootstrap/dist/css/bootstrap.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Value from "./Value";
import AssetName from "./AssetName";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

function Asset() {
  return (
    <Row className="asset">
      <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}>
        <AssetName name="Danske Bank" />
      </Col>
      <Col style={{ margin: "auto" }}>
        <Value value="1000" />
      </Col>
      <Col></Col>
      <Col className="col-sm-2" style={{ margin: "auto", paddingLeft: "0px" }}>
        <PrimaryBtn type="edit" />
        <SecondaryBtn type="delete" />
      </Col>
    </Row>
  );
}

export default Asset;
