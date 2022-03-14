import Button from "@mui/material/Button";

function ButtonGroup(props) {
  return (
    <div className="buttongroup">
      <div
        className="cont"
        style={{ padding: "8px 0px 2px 0px" }}
        sx={{ color: "#18388C" }}
      >
        <Button
          onClick={props.event1}
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
          {props.primaryText}
        </Button>
      </div>
      <div className="cont" style={{ padding: "2px 0px 8px 0px" }}>
        <Button
          onClick={props.event2}
          variant="outlined"
          size="small"
          sx={{
            minWidth: "75px",
            maxHeight: "25px",
            backgroundColor: "",
            borderColor: "gray",
            color: "gray",
          }}
          style={{ fontSize: "12px" }}
        >
          {props.secondaryText}
        </Button>
      </div>
    </div>
  );
}

export default ButtonGroup;
