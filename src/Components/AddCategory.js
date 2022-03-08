import { Row, Col } from "react-bootstrap";
import Tag from "./Tag";
import SelectImageIcon from "./SelectImageIcon";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddCategory(props) {
  //Constants and lifecycle methods for manual input
  const [input, setInput] = useState("");
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  //Constants and lifecycle methods for input that selected from dropdown
  const [inputSelect, setInputSelect] = useState("");
  const handleChangeInputSelect = (e) => {
    setInputSelect(e.target.value);
    console.log(inputSelect);
  };

  if (props.type === "automatic") {
    return (
      <Row className="addCategory">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <FormControl fullWidth>
            <InputLabel size="small" id="demo-simple-select-label">
              Category name
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category name"
              onChange={handleChangeInputSelect}
              value={inputSelect}
              size="small"
            >
              {/*Note: You can use int for value if that makes quering easier*/}
              <MenuItem value={"Stocks"}>Stocks</MenuItem>
              <MenuItem value={"Real Estate"}>Real Estate</MenuItem>
              <MenuItem value={"Crypto"}>Crypto</MenuItem>
              <MenuItem value={"Bank account"}>Bank account</MenuItem>
              <MenuItem value={"Create your own category"}>
                <i>Create your own category</i>
              </MenuItem>
            </Select>
          </FormControl>
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
      <Row className="addCategory">
        <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
        <Col style={{ margin: "auto" }}>
          <TextField
            label="Category name"
            value={input}
            onChange={handleChangeInput}
            fullWidth
            size="small"
          />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Select image" />
          <SelectImageIcon />
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
    );
  }
}
export default AddCategory;
