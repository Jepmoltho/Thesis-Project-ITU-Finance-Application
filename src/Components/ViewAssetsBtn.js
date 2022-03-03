import "bootstrap/dist/css/bootstrap.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
// import "bootstrap.bundle.js";

function ViewAssets(props) {
  if (props.inline) {
    return (
      <div
        className="viewAssetsBtn"
        style={{
          display: "inline",
        }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "16px",
            color: "#18388C",
            display: "inline",
          }}
        >
          View assets
        </p>
      </div>
    );
  } else
    return (
      <div className="viewAssetsBtn">
        <p
          style={{
            margin: "0px",
            fontSize: "16px",
            color: "#18388C",
            display: "inline",
          }}
        >
          View assets
        </p>
        <ArrowDropDownRoundedIcon sx={{ color: "#18388C" }} />
      </div>
    );
}

/*
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>*/

export default ViewAssets;
