import { Row, Col } from "react-bootstrap";
// import PrimaryBtn from "./PrimaryBtn";
// import SecondaryBtn from "./SecondaryBtn";
import CategorySelect from "./CategorySelect";
import InputString from "./InputString";
import Tag from "./Tag";
import SelectImageIcon from "./SelectImageIcon";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
//import IconButton from "@mui/material/IconButton";

function AddCategory(props) {
  if (props.type === "automatic") {
    return (
      <Row className="addCategory">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <CategorySelect label="Name" />
        </Col>
        <Col style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}></Col>
        <Col
          className="col-sm-1"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />

          {/* <PrimaryBtn type="save" />
          <SecondaryBtn type="cancel" /> */}
        </Col>
        <Col className="col-sm-1">
          <Icon delete />
        </Col>
      </Row>
    );
  }

  if (props.type === "manual") {
    return (
      <Row className="addCategory">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <InputString label="Name" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Select image" />
          {/*<Icon camera />*/}
          {/* <PhotoCamera /> */}
          <SelectImageIcon />
        </Col>
        <Col style={{ margin: "auto" }}></Col>
        <Col
          className="col-sm-1"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup primaryText="Save" secondaryText="Cancel" />
          {/* <PrimaryBtn type="save" />
          <SecondaryBtn type="cancel" /> */}
        </Col>
        <Col className="col-sm-1">
          <Icon delete />
        </Col>
      </Row>
    );
  }
}
export default AddCategory;

/*
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
      <Col className="col-sm-2" style={{ margin: "auto", paddingLeft: "0px" }}>
        <PrimaryBtn type="save" />
        <SecondaryBtn type="cancel" />
      </Col>
    </Row>
  );
}
*/
