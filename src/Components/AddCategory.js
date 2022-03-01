import { Row } from "react-bootstrap";

function AddCategory() {
  return (
    <Row className="addCategory">
      <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}></Col>
      <Col className="col-sm-2" style={{ margin: "auto", paddingLeft: "0px" }}>
        <ViewAssetsBtn />
      </Col>
    </Row>
  );
}
