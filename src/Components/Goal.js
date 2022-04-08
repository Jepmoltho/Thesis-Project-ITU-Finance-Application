import "bootstrap/dist/css/bootstrap.css";
import Tag from "./Tag";
import ProgressBar from "./ProgressBar";
import Icon from "./Icon";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TextField } from "@mui/material";
import { useState } from "react";
import Button from "react-bootstrap/Button"
import { postGoal } from "../data";

function Goal(props) {
  var openClose = false;
  const userId = localStorage.getItem("userId");

  /*
  function addGoal(input){
    input === "true" ? openClose = true : openClose = false
  }
  */

  const [goal, setGoal] = useState()
  const handleChangeGoal = (userId, e) => {
    saveGoal(userId, e.target.value)
  }
  //setGoal(e.target.value)

  function saveGoal(userId, goal){
    setGoal(goal)
    postGoal(userId, goal)
  }

  return (
    <div className="goalbox">
      <Row style={{ padding: "10px" }}>
        <Col style={{}}>
          <Tag inline text="Goal" style={{ display: "inline" }} />
          <Icon infosmall style={{ position: "relative", top: "-10px" }} />
          <Icon editgoal style={{ position: "relative", float: "right" }} />
        </Col>
      </Row>
    
      {
        openClose ? 
          <div>
          {/* Display goal */}
          <Row style={{ padding: "10px" }}>
            <Col>
              <p style={{ color: "#00145E", float: "left", marginBottom: "7px" }}>
                Goal
              </p>
              <p
                name="-"
                style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
              >
                {props.goal === undefined ? "-" : props.goal}
              </p>
            </Col>
          </Row>
          <Row style={{ padding: "10px", paddingBottom: "20px" }}>
            <ProgressBar completed="80" style={{ position: "relative" }} />
            {/* Del av tallet / Det hele tallet * 100 = (x) % 
              networth / goal * 100 = x
            */}
          </Row>
          </div>
        : 
        <div>
          {/* Edit goal */}
          <Row> 
            <p style={{ color: "#00145E", float: "left", marginBottom: "7px" }}>Insert value of Goal in DKK</p>
            <TextField
              value={goal}
              size="small"
              fullWidth
            />
          </Row>
          <Row>
            <div className="cont" style={{ padding: "8px 0px 2px 0px" }} sx={{ color: "#18388C" }}>
              <Button
                onClick={saveGoal()}
                variant="contained"
                size="small"
                sx={{
                  minWidth: "75px",
                  maxHeight: "25px",
                  backgroundColor: "#18388C",
                  color: "white",
                }}
                style={{ fontSize: "12px" }}
              >
              Save
              </Button>
            </div>
          </Row>
      </div>
      }
    </div>
  );
}

export default Goal;
