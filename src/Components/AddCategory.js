import React from "react";
import { Row, Col } from "react-bootstrap";
import Tag from "./Tag";
import SelectImageIcon from "./SelectImageIcon";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CategoryIconList from "./CategoryIconList";
//Form dialogue imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AddCategory(props) {
  //Constants and lifecycle methods for manual input

  const [input, setInput] = useState("");
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  //Constants and lifecycle methods for input that selected from dropdown
  const [inputSelect, setInputSelect] = useState("");
  const handleChangeInputSelect = (e) => {
    if (e.target.value !== "Create your own category") {
      setInputSelect(e.target.value);
    } else {
      //Open form dialogue here
      handleClickOpen(); //Can I do it in the funciton instead? Create two new input constants
    }
    //setInputSelect(e.target.value);
    //Implement here -
  };
  //console.log(inputSelect);
  //localStorage.setItem()
  //console.log(inputSelect);

  useEffect(() => {
    localStorage.setItem("categorySelect", inputSelect);
    //Maybe add one for manCatName here and move it from method to fix one character problem
  }, [inputSelect]);

  const [isIconListvisible, setIsIconListvisible] = React.useState(false);

  const isListvisible = () => {
    setIsIconListvisible(!isIconListvisible);
  };

  //Form dialogue logic from here
  const [open, setOpen] = React.useState(false);

  //Con
  const [manualCatName, setManualCatName] = useState("");
  const handleChangeManCatName = (e) => {
    setManualCatName(e.target.value);
    console.log(manualCatName); //Works with delay of one character!
    //localStorage.setItem("categorySelect", manualCatName);
  };

  useEffect(() => {
    localStorage.setItem("categorySelect", manualCatName);
    console.log(manualCatName);
    //Maybe add one for manCatName here and move it from method to fix one character problem
  }, [manualCatName]);

  const handleClickOpen = () => {
    setOpen(true);
    //HERE
    //setManualCatName(e.target.value)
  };

  const handleClose = () => {
    //Put in useEffect instead
    setOpen(false);
  };

  //To here

  if (props.type === "manual") {
    return (
      <div className="addCategory">
        <Row className="" style={{ zIndex: "-1" }}>
          <Col className="col-sm-1" style={{ margin: "auto" }}></Col>
          <Col style={{ margin: "auto" }}>
            <TextField
              label="Category name"
              value={input}
              onChange={handleChangeInput}
              fullWidth
              size="small"
            />{" "}
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
            <ButtonGroup
              primaryText="Save"
              secondaryText="Cancel"
              event1={props.eventSave}
              event2={props.eventCancel}
            />
          </Col>
          <Col className="col-sm-1">
            <Icon delete />
          </Col>
        </Row>
        {/* Shows iconList */}
        {isIconListvisible ? <CategoryIconList /> : null}
      </div>
    );
  } else {
    return (
      <div className="addCategory">
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
            <ButtonGroup
              primaryText="Save"
              secondaryText="Cancel"
              event1={props.eventSave}
              event2={props.eventCancel}
            />
          </Col>
          <Col className="col-sm-1">
            <Icon delete />
          </Col>
        </Row>
        {/*Form dialogue from here*/}
        <div>
          {/*
          <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button>
          */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Name your category</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter the name of you your custom castegory
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Category name"
                type="name"
                fullWidth
                variant="standard"
                onChange={handleChangeManCatName} //Added
                value={manualCatName} //Added
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={props.eventCancel}>Cancel</Button>
              <Button onClick={props.eventSave}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
        {/* To here*/}
      </div>
    );
  }
}
export default AddCategory;

/*
function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
*/
