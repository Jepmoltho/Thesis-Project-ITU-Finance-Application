import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import PrimaryBtn from "./PrimaryBtn";
// import SecondaryBtn from "./SecondaryBtn";
import InputString from "./InputString";
import Toggle from "./Toggle";
import Tag from "./Tag";
import BankAccountSelect from "./BankAccountSelect";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";

function EditAsset(props) {
  if (props.realestateman) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Calculate m2" />
          <Toggle />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of property" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />

          {/* <PrimaryBtn type="save" />
          <SecondaryBtn type="cancel" /> */}
        </Col>
      </Row>
    );
  }
  if (props.realestateauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Calculate m2" />
          <Toggle defaultChecked />
        </Col>
        <Col className="col-sm-3" style={{ margin: "auto" }}>
          <InputString label="Name of asset" />
        </Col>
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <InputString label="m2" />
        </Col>
        <Col className="col-sm-2" style={{ margin: "auto" }}>
          <InputString label="Price pr. m2" />
        </Col>
        <Col className="col-sm-3"></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />
          {/* <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" /> */}
        </Col>
      </Row>
    );
  }
  if (props.bankman) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Conn. bank" />
          <Toggle />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name of bank account" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Value" />
        </Col>
        <Col></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />
          {/* <PrimaryBtn type="save" />
          <SecondaryBtn type="cancel" /> */}
        </Col>
      </Row>
    );
  }
  if (props.bankauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Conn. bank" />
          <Toggle />
        </Col>
        <Col style={{ margin: "auto" }}>
          <BankAccountSelect label="Select bank" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="API key" />
        </Col>
        <Col style={{ margin: "auto", paddingLeft: "0px" }}>
          <Icon />
        </Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />
          {/* <PrimaryBtn type="save" />
          <SecondaryBtn type="cancel" /> */}
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
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />

          {/* <PrimaryBtn type="edit" />
          <SecondaryBtn type="delete" /> */}
        </Col>
      </Row>
    );
}

export default EditAsset;
