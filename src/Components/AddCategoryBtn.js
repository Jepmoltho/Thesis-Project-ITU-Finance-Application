import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function AddCategoryBtn(props) {
  return (
    <center>
      <IconButton onClick={props.event} aria-label="AddCategoryBtn">
        <AddCircleIcon style={{ fontSize: 75 }} sx={{ color: "#18388C" }} />
      </IconButton>
    </center>
  );
}

export default AddCategoryBtn;
