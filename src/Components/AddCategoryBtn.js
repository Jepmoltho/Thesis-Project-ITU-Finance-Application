import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddCategoryBtn(){
    return(
        <IconButton aria-label="AddCategoryBtn">
            <AddCircleIcon style={{ fontSize: 75 }} sx={{ color: "#18388C"}} />
        </IconButton>
    );
}

export default AddCategoryBtn;