import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
//Note: You probably need IconButton and not Button components from Mui. Find them under button components
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function Icon(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // ---------------------text of infobox-------------
  function infoBoxText(infoText){
    if(infoText === "goal"){
      return "Insert a goal and \n track your progress."
    }
    if(infoText === "overview"){
      return "Here you see an overview of your total assets,\n total debt and your networth."
    }
    if(infoText === "seeHowPros"){
      return "Click on the link to see suggestions on how to allocate your asset."
    }
  }

  if (props.infosmall) {
    return (
      <span style={{float: "left"}}>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          >
          <InfoIcon sx={{ color: "#8c8c8c" }} style={{ padding: "2px", float: "left" }} />
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none"
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          >
            {/* This is the text of the infobox */}
            {infoBoxText(props.textInfo)} 
          <Typography sx={{ p: 1 }}>{props.goalInfoBox}</Typography>
        </Popover>
      </span>
    ); 
  }
  if (props.edit) {
    return (
      <IconButton aria-label="edit" style={{ float: "right" }}>
        <EditIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
    );
  }
  if (props.editgoal) {
    return (
      <IconButton 
        aria-label="edit" 
        style={{ float: "right", padding: "0px" }}
        onClick={props.eventEdit}
      >
        <EditIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
    );
  }
  if (props.delete) {
    return (
      <IconButton
        onClick={props.event1}
        aria-label="delete"
        style={{ float: "right" }}
      >
        <DeleteIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
    );
  }
  if (props.camera) {
    return (
      <label htmlFor="icon-button-file">
        <IconButton
          aria-label="upload picture"
          component="span"
          style={{ left: "-8px" }}
        >
          <PhotoCamera />
        </IconButton>
      </label>
    );
  }
  if (props.add) {
    return (
      <IconButton
        aria-label="add"
        style={{ float: "right", padding: "0px", top: "10px" }}
        onClick={props.event1}
      >
        <AddCircleIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
    );
  } else {
    return <InfoOutlinedIcon sx={{ color: "#8c8c8c" }} />;
  }
}

export default Icon;
