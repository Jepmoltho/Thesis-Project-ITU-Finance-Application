import React from "react";
import { Row, Col } from "react-bootstrap";
import CategorySelect from "./CategorySelect";
import InputString from "./InputString";
import Tag from "./Tag";
import SelectImageIcon from "./SelectImageIcon";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import CategoryIconList from "./CategoryIconList";


function AddCategory(props) {
  
  const [isIconListvisible, setIsIconListvisible] = React.useState(false);

  const isListvisible = () => {
    setIsIconListvisible(!isIconListvisible)
  }
  
  
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
        </Col>
        <Col className="col-sm-1">
          <Icon delete />
        </Col>
      </Row>
    );
  }

  if (props.type === "manual") {
    return (
      <div>
        <Row className="addCategory" style={{ zIndex:"-1"}}>
          <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
          <Col style={{ margin: "auto" }}>
            <InputString label="Name" />
          </Col>
          <Col style={{ margin: "auto" }}>
            <Tag text="Select image" />
            <SelectImageIcon isListvisible={isListvisible} />
            </Col>
          <Col style={{ margin: "auto" }}></Col>
          <Col
            className="col-sm-1"
            style={{ margin: "auto", paddingLeft: "0px" }}
            >
            <ButtonGroup primaryText="Save" secondaryText="Cancel" />
          </Col>
          <Col className="col-sm-1">
            <Icon delete />
          </Col>
        </Row>
        {/* Shows iconList */}
        {isIconListvisible ? <CategoryIconList /> : null}
      </div>
    );
  }
}
export default AddCategory;

