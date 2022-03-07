import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

//For camera upload button
const Input = styled("input")({
  display: "none",
});

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
      <IconButton aria-label="delete" style={{ float: "right" }}>
        <DeleteIcon sx={{ color: "#8c8c8c", padding: "3px" }} />
      </IconButton>
    );
  }
  if (props.camera) {
    return (
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          aria-label="upload picture"
          component="span"
          style={{ left: "-8px" }}
        >
          <PhotoCamera />
        </IconButton>
      </label>
    );
  } else {
    return <InfoOutlinedIcon sx={{ color: "#8c8c8c" }} />;
  }
}

export default Icon;
