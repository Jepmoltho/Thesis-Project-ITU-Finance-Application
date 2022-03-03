import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Value from "./Value";
import AssetName from "./AssetName";
// import PrimaryBtn from "./PrimaryBtn";
// import SecondaryBtn from "./SecondaryBtn";
import Tag from "./Tag";
import ButtonGroup from "./ButtonGroup";

function Asset(props) {
  if (props.normal) {
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
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Edit" secondaryText="Delete" />
          {/* <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" /> */}
        </Col>
      </Row>
    );
  }

  if (props.debt) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <AssetName name="Danske Bank" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Value debt value="1000" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Edit" secondaryText="Delete" />
          {/* <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" /> */}
        </Col>
      </Row>
    );
  }
  if (props.realestate) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col className="col-sm-3" style={{ margin: "auto" }}>
          <AssetName name="H.C. Hansensvej 7" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Value" />
          <Value tag value="1.500.000" />
        </Col>
        <Col className="col-sm-2" style={{ margin: "auto", maxWidth: "120px" }}>
          <Tag text="m2" />
          <Value tagNonbold value="86" />
        </Col>
        <Col style={{ margin: "auto", paddingLeft: "0px" }}>
          <Tag text="price pr. m2" />
          <Value tagNonbold value="46.421" />
        </Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Edit" secondaryText="Delete" />
          {/* <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" /> */}
        </Col>
      </Row>
    );
  }
}

export default Asset;
