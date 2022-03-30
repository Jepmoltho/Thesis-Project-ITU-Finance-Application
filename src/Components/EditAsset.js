import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Switch from "@mui/material/Switch"; //This is the toggle
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import { useSwitch } from "@mui/base/SwitchUnstyled"; Note: UseSwitch hook from MUI - might be usefull to deal with state of the toggle/switch

function EditAsset(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const { category } = props;

  //Constants and lifecycle methods for manual name input
  const [inputName, setInputName] = useState("");
  const handleChangeInputName = (e) => {
    setInputName(e.target.value);
  };

  //Constants and lifecycle methods for manual name value
  const [inputValue, setInputValue] = useState("");
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  //Constants and lifecycle methods for m2
  const [inputM2, setInputM2] = useState("");
  const handleChangeInputM2 = (e) => {
    setInputM2(e.target.value);
  };

  //Constants and lifecycle methods for price pr. m2
  const [inputPriceM2, setInputPriceM2] = useState("");
  const handleChangeInputPriceM2 = (e) => {
    setInputPriceM2(e.target.value);
  };

  //Constants and lifecycle methods for API key
  const [inputAPIKey, setInputAPIKey] = useState("");
  const handleChangeInputAPIKey = (e) => {
    setInputAPIKey(e.target.value);
  };

  //Constants and lifecycle methods for input that selected from dropdown
  const [inputSelect, setInputSelect] = useState("");
  const handleChangeInputSelect = (e) => {
    setInputSelect(e.target.value);
  };

  //Saves assetName to local storage on change
  useEffect(() => {
    localStorage.setItem("assetName", inputName);
    localStorage.setItem("assetValue", inputValue);
    localStorage.setItem("m2", inputM2);
    localStorage.setItem("pricem2", inputPriceM2);
  }, [inputName, inputValue, inputM2, inputPriceM2]);

  switch (category) {
    case "realestate":
      if (checked === true) {
        return (
          // What should be render if switch is true
          <div className="Edit asset">
            <Row className="asset">
              <Col className="col-sm-1" style={{ margin: "auto" }}>
                <Tag text="Calculate pr. m²" />
                <Switch checked={checked} onChange={handleChange} />
              </Col>
              <Col className="col-sm-3" style={{ margin: "auto" }}>
                <TextField
                  label="Name of property"
                  value={inputName}
                  onChange={handleChangeInputName}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col className="col-sm-1" style={{ margin: "auto" }}>
                <TextField
                  label="m2"
                  value={inputM2}
                  onChange={handleChangeInputM2}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col className="col-sm-2" style={{ margin: "auto" }}>
                <TextField
                  label="price pr. m2"
                  value={inputPriceM2}
                  onChange={handleChangeInputPriceM2}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col className="col-sm-3"></Col>
              <Col
                className="col-sm-2"
                style={{ margin: "auto", paddingLeft: "0px" }}
              >
                <ButtonGroup
                  primaryText="Save"
                  secondaryText="Cancel"
                  event1={props.eventSaveAssetRealestateM2}
                  event2={props.eventCancel}
                />
              </Col>
            </Row>
          </div>
        );
      } else {
        return (
          <div className="Edit asset">
            <Row className="asset">
              <Col className="col-sm-1" style={{ margin: "auto" }}>
                <Tag text="Calculate pr. m²" />
                <Switch checked={checked} onChange={handleChange} />
              </Col>
              <Col style={{ margin: "auto" }}>
                <TextField
                  label="Name of property"
                  value={inputName}
                  onChange={handleChangeInputName}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col style={{ margin: "auto" }}>
                <TextField
                  label="Value"
                  value={inputValue}
                  onChange={handleChangeInputValue}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col></Col>
              <Col
                className="col-sm-2"
                style={{ margin: "auto", paddingLeft: "0px" }}
              >
                <ButtonGroup
                  primaryText="Save"
                  secondaryText="Cancel"
                  event1={props.eventSave}
                  event2={props.eventCancel}
                />
              </Col>
            </Row>
          </div>
        );
      }

    case "bank":
      if (checked === true) {
        return (
          // copied from props.bankauto
          <div className="Edit asset">
            <Row className="asset">
              <Col className="col-sm-1" style={{ margin: "auto" }}>
                <Tag text="Connect bank" />
                <Switch checked={checked} onChange={handleChange} />
              </Col>
              <Col style={{ margin: "auto" }}>
                <FormControl fullWidth>
                  <InputLabel size="small" id="demo-simple-select-label">
                    Select bank
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select bank"
                    onChange={handleChangeInputSelect}
                    value={inputSelect}
                    size="small"
                  >
                    <MenuItem value={"Danske bank"}>Danske Bank</MenuItem>
                    <MenuItem value={"Support for more banks coming soon"}>
                      <i>Support for more banks coming soon</i>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col style={{ margin: "auto" }}>
                <TextField
                  label="API Key"
                  value={inputAPIKey}
                  onChange={handleChangeInputAPIKey}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col style={{ margin: "auto", paddingLeft: "0px" }}>
                <Icon />
              </Col>
              <Col
                className="col-sm-2"
                style={{ margin: "auto", paddingLeft: "0px" }}
              >
                <ButtonGroup
                  primaryText="Save"
                  secondaryText="Cancel"
                  event1={props.eventSave}
                  event2={props.eventCancel}
                />
              </Col>
            </Row>
          </div>
        );
      } else {
        return (
          <div className="Edit asset">
            <Row className="asset">
              <Col className="col-sm-1" style={{ margin: "auto" }}>
                <Tag text="Connect bank" />
                <Switch checked={checked} onChange={handleChange} />
              </Col>
              <Col style={{ margin: "auto" }}>
                <TextField
                  label="Name of bank account"
                  value={inputName}
                  onChange={handleChangeInputName}
                  fullWidth
                  size="small"
                />{" "}
              </Col>
              <Col style={{ margin: "auto" }}>
                <TextField
                  label="Value"
                  value={inputValue}
                  onChange={handleChangeInputValue}
                  fullWidth
                  size="small"
                />
              </Col>
              <Col></Col>
              <Col
                className="col-sm-2"
                style={{ margin: "auto", paddingLeft: "0px" }}
              >
                <ButtonGroup
                  primaryText="Save"
                  secondaryText="Cancel"
                  event1={props.eventSave}
                  event2={props.eventCancel}
                />
              </Col>
            </Row>
          </div>
        );
      }

    default:
      return (
        <div className="Edit asset">
          <Row className="asset">
            <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
            <Col style={{ margin: "auto" }}>
              <TextField
                label="Name of asset"
                value={inputName}
                onChange={handleChangeInputName}
                fullWidth
                size="small"
              />
            </Col>
            <Col style={{ margin: "auto" }}>
              <TextField
                label="Value"
                value={inputValue}
                onChange={handleChangeInputValue}
                fullWidth
                size="small"
              />
            </Col>
            <Col></Col>
            <Col
              className="col-sm-2"
              style={{ margin: "auto", paddingLeft: "0px" }}
            >
              <ButtonGroup
                primaryText="Save"
                secondaryText="Cancel"
                event1={props.eventSave}
                event2={props.eventCancel}
              />
            </Col>
          </Row>
        </div>
      );
  }
}

export default EditAsset;

/* //Introduce logic that renders realestate based on switch! this is the code that should render if the toggle is disabled
    if (props.checked){ // 
      return (
        <Row className="asset">
          <Col className="col-sm-1" style={{ margin: "auto" }}>
            <Tag text="Calculate pr. m²" />
            <Switch />
          </Col>
          <Col style={{ margin: "auto" }}>
            <TextField
              label="Name of property"
              value={inputName}
              onChange={handleChangeInputName}
              fullWidth
              size="small"
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <TextField
              label="Value"
              value={inputValue}
              onChange={handleChangeInputValue}
              fullWidth
              size="small"
            />
          </Col>
          <Col></Col>
          <Col
            className="col-sm-2"
            style={{ margin: "auto", paddingLeft: "0px" }}
          >
            <ButtonGroup 
              primaryText="Save" 
              secondaryText="Cancel" 
              event1={props.eventSave}
              event2={props.eventCancel} 
            />
          </Col>
        </Row>
      );
    } else {
    }*/

/*

    Introduce when bank switch is false 

    if(props.checked){
      return (
        <Row className="asset">
          <Col className="col-sm-1" style={{ margin: "auto" }}>
            <Tag text="Connect bank" />
            <Switch 
              checked={false}
              onChange={props.toggle()}
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <TextField
              label="Name of bank account"
              value={inputName}
              onChange={handleChangeInputName}
              fullWidth
              size="small"
            />{" "}
          </Col>
          <Col style={{ margin: "auto" }}>
            <TextField
              label="Value"
              value={inputValue}
              onChange={handleChangeInputValue}
              fullWidth
              size="small"
            />
          </Col>
          <Col></Col>
          <Col
            className="col-sm-2"
            style={{ margin: "auto", paddingLeft: "0px" }}
          >
            <ButtonGroup 
              primaryText="Save" 
              secondaryText="Cancel"
              event1={props.eventSave}
              event2={props.eventCancel}  
              />
          </Col>
        </Row>
      );
    } else {}
    */

/* Deleted as there should be a gathered logic for real estate
  if (props.realestateauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Calculate pr. m²" />
          <Switch />
        </Col>
        <Col className="col-sm-3" style={{ margin: "auto" }}>
          <TextField
            label="Name of property"
            value={inputName}
            onChange={handleChangeInputName}
            fullWidth
            size="small"
          />
        </Col>
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <TextField
            label="m2"
            value={inputM2}
            onChange={handleChangeInputM2}
            fullWidth
            size="small"
          />
        </Col>
        <Col className="col-sm-2" style={{ margin: "auto" }}>
          <TextField
            label="price pr. m2"
            value={inputPriceM2}
            onChange={handleChangeInputPriceM2}
            fullWidth
            size="small"
          />
        </Col>
        <Col className="col-sm-3"></Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup
            primaryText="Save"
            secondaryText="Cancel"
            event1={props.eventSave}
            event2={props.eventCancel}
          />
        </Col>
      </Row>
    );
  }

  /* Deleted as there should be a gathered logic for bank
  if (props.bankauto) {
    return (
      <Row className="asset">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <Tag text="Connect bank" />
          <Switch 
            disabled={true}
            onChange={props.toggle()}
          />
        </Col>
        <Col style={{ margin: "auto" }}>
          <FormControl fullWidth>
            <InputLabel size="small" id="demo-simple-select-label">
              Select bank
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select bank"
              onChange={handleChangeInputSelect}
              value={inputSelect}
              size="small"
            >
              <MenuItem value={"Danske bank"}>Danske Bank</MenuItem>
              <MenuItem value={"Support for more banks coming soon"}>
                <i>Support for more banks coming soon</i>
              </MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col style={{ margin: "auto" }}>
          <TextField
            label="API Key"
            value={inputAPIKey}
            onChange={handleChangeInputAPIKey}
            fullWidth
            size="small"
          />
        </Col>
        <Col style={{ margin: "auto", paddingLeft: "0px" }}>
          <Icon />
        </Col>
        <Col
          className="col-sm-2"
          style={{ margin: "auto", paddingLeft: "0px" }}
        >
          <ButtonGroup
            primaryText="Save"
            secondaryText="Cancel"
            event1={props.eventSave}
            event2={props.eventCancel}
          />
        </Col>
      </Row>
    );
  } */
