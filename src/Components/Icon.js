import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Icon(props) {
  if (props.info) {
    return <InfoIcon />;
  }
  if (props.edit) {
    return (
      <EditIcon
        sx={{ color: "#8c8c8c" }}
        style={{ float: "right", paddingTop: "8px" }}
      />
    );
  }
  if (props.delete) {
    return (
      <DeleteIcon
        sx={{ color: "#8c8c8c" }}
        style={{ float: "right", paddingTop: "8px" }}
      />
    );
  } else {
    return <InfoOutlinedIcon />;
  }
}

export default Icon;
