import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Graph from "../Components/Graph";
import SectorDiagram from "./SectorDiagram";
import Overview from "./Overview";
import Goal from "./Goal";
import Seehowpros from "./Seehowpros";
import React from "react"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {putGoal} from "../data"



function TopComponents(props) {
  const userId = localStorage.getItem("userId");

  //Save button in dialogue box needs to do this
  async function updateGoalHandler(userId, newGoal) {
    putGoal(userId, newGoal);
    //getAssets();
    handleClose();
    //Rerender after: Add an await above and rerender here
  }
  
  //Logic for dialogue box starts from here
  const [open, setOpen] = React.useState(false);

  //Edit button on goalBox needs to do this
  
  const [newGoal, setNewGoal] = useState("");
  const setNewGoalHandler = (e) => {
    setNewGoal(e.target.value);
  };
  

  //Opens dialogue box upon edit goal button ## Need to review this one 

  function handleClickOpen() { // input assetId, assetName
    //Note that it sets the initial assetName. Nessesary for the edit asset functionality so you don't have to type in the same name every time you update the value
    //localStorage.setItem("assetIdForEdit", assetId);
    //setNewGoalName(assetName);
    setOpen(true);
    console.log("Dialogbox for Goal is open")
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Row>
      <Col
        className="col-sm-7"
        style={{ marginRight: "0px", paddingRight: "0px", paddingLeft: "0px" }}
      >
        <Graph
          networth={props.netWorth}
          historicNetworth={props.historicNetworth}
        />
      </Col>
      <Col
        className="col-sm-5"
        style={{ marginRight: "0px", paddingRight: "0px", paddingLeft: "10px" }}
      >
        <Row
          name="sectorDiagram box"
          style={{
            marginBottom: "14px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
          className="card"
        >
          <Col style={{ paddingLeft: "0px" }}>
            <Seehowpros />
            <SectorDiagram
              categories={props.categories}
              netWorth={props.netWorth}
            />
          </Col>
        </Row>
        <Row
          name="overview and goal"
          style={{
            marginTop: "14px",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <Col
            name="overview Card"
            className="card"
            style={{
              paddingLeft: "10px",
              paddingRight: "0px",
              marginRight: "7px",
            }}
          >
            <Overview
              assetsTotal={props.assetsTotal}
              debtTotal={props.debtTotal}
              netWorth={props.netWorth}
            />
          </Col>
          <Col
            name="goal Card"
            className="card"
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              marginLeft: "0px",
            }}
          >
            <Goal 
              goal="100000" 
              eventEdit={() => handleClickOpen()} // open dialog box
            />
          </Col>
        </Row>
      </Col>
    </Row>

    {/* JSX for Goal dialgoue box from here */}
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> Update Goal </DialogTitle>
      <DialogContent>
          <DialogContentText>
            Update the value of your Goal
          </DialogContentText>
        
          <TextField
              required
              margin="dense"
              id="name"
              label="Goal"
              type=""
              fullWidth
              variant="standard"
              value={newGoal}
              onChange={setNewGoalHandler}
            />

      </DialogContent>
      <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() =>
                updateGoalHandler(
                  userId,
                  newGoal,
                )
              }
            >
              Save
            </Button>
          </DialogActions>
        
    </Dialog>

    </div>

  );
}

export default TopComponents;
