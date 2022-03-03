import Button from "@mui/material/Button";

function ButtonGroup() {
  return (
    <div className="buttongroup">
      <Button variant="contained" size="small" sx={{ maxWidth: "100px" }}>
        Contained
      </Button>
      <br />
      <Button variant="outlined" size="small" sx={{ minWidth: "100px" }}>
        Outlined
      </Button>
    </div>
  );
}

export default ButtonGroup;
