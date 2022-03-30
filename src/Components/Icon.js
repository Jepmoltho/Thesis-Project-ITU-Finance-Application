import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";

//Note: You probably need IconButton and not Button components from Mui. Find them under button components
function Icon(props) {
  if (props.info) {
    return <InfoIcon sx={{ color: "#8c8c8c" }} />;
  }
  if (props.infosmall) {
    return <InfoIcon sx={{ color: "#8c8c8c" }} style={{ padding: "2px" }} />;
  }
  if (props.edit) {
    return (
      <IconButton aria-label="edit" style={{ float: "right" }}>
        <EditIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
      // <EditIcon
      //   sx={{ color: "#8c8c8c" }}
      //   style={{ float: "right", paddingTop: "8px" }}
      // />
    );
  }
  if (props.editgoal) {
    return (
      <IconButton aria-label="edit" style={{ float: "right", padding: "0px" }}>
        <EditIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
      // <EditIcon
      //   sx={{ color: "#8c8c8c" }}
      //   style={{ float: "right", paddingTop: "8px" }}
      // />
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
