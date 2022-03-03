import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Icon(props) {
  if (props.info) {
    return <InfoIcon />;
  }
  if (props.edit) {
    return <EditIcon />;
  }
  if (props.delete) {
    return <DeleteIcon />;
  } else {
    return <InfoOutlinedIcon />;
  }
}

export default Icon;
