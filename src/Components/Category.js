import "bootstrap/dist/css/bootstrap.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import CategoryIcon from "../ImageFiles/CategoryIcon.png";

function Category() {
  return (
    <div className="category">
      <Row>
        <Col style={{ margin: "auto" }}>
          <img
            src="/CategoryIcon.png"
            alt="somealt"
            style={{ maxWidth: "40px", display: "inline" }}
          ></img>
          <div style={{ display: "inline" }}>
            <h3 style={{ display: "inline" }}>
              <b>Stocks</b>
            </h3>
          </div>
        </Col>
        <Col className="bsPrefix">
          <p style={{ margin: "0px" }}>Value</p>
          <h2>1000</h2>
        </Col>
        <Col>
          <h2>Test test test</h2>
        </Col>
        <Col>
          <h2>Test test test</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Category;
