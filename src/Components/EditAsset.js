import "bootstrap/dist/css/bootstrap.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import InputString from "./InputString";

function EditAsset(props) {
  if (props.realestateman) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" />
        </Col>
      </Row>
    );
  }
  if (props.realestateauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" />
        </Col>
      </Row>
    );
  }
  if (props.bankman) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" />
        </Col>
      </Row>
    );
  }
  if (props.bankauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" />
        </Col>
      </Row>
    );
  } else
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" />
        </Col>
      </Row>
    );
}

export default EditAsset;
