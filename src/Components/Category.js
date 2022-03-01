import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewAssetsBtn from "./ViewAssetsBtn";
import Tag from "./Tag";
import Value from "./Value";
import CategoryProfit from "./CategoryProfit";
import NumberOfAssets from "./NumberOfAssets";
import CategoryIcon from "./CategoryIcon";

//import CategoryIcon from "../ImageFiles/CategoryIcon.png";

function Category(props) {
  return (
    <Row className="category">
      <Col className="col-sm-1" style={{ margin: "auto" }}>
        <CategoryIcon />
      </Col>
      <Col style={{ margin: "auto" }}>
        <p
          style={{
            margin: "0px",
            color: "#18388C",
            fontSize: "20px",
            position: "relative",
            top: "3px",
          }}
        >
          <b>{props.title}</b>
        </p>
        <NumberOfAssets amount="3" />
      </Col>
      <Col style={{ margin: "auto" }}>
        <Tag text="Value" />
        <Value value="1000" />
      </Col>
      <Col style={{ margin: "auto" }}>
        <Tag text="Profit" />
        <CategoryProfit profit="3456" />
      </Col>
      <Col className="col-sm-2" style={{ margin: "auto", paddingLeft: "0px" }}>
        <ViewAssetsBtn />
      </Col>
    </Row>
  );
}

export default Category;
