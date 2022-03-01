import { Row, Col, Dropdown } from "react-bootstrap";

function AddCategory() {
  return (
    <Row className="addCategory">
      <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col style={{ margin: "auto" }}></Col>
      <Col style={{ margin: "auto" }}></Col>
      <Col
        className="col-sm-2"
        style={{ margin: "auto", paddingLeft: "0px" }}
      ></Col>
    </Row>
  );
}

export default AddCategory;
