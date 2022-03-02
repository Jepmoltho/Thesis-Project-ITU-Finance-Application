function Value(props) {
  if (props.tag) {
    return (
      <div className="value">
        <p
          style={{
            margin: "0px",
            fontSize: "18px",
            color: "#18388C",
            position: "relative",
            top: "-3px",
          }}
        >
          <b>{props.value} DKK</b>
        </p>
      </div>
    );
  }
  if (props.tagNonbold) {
    return (
      <div className="value">
        <p
          style={{
            margin: "0px",
            fontSize: "18px",
            color: "#18388C",
            position: "relative",
            top: "-3px",
          }}
        >
          {props.value} DKK
        </p>
      </div>
    );
  } else {
    return (
      <div className="value">
        <p
          style={{
            margin: "0px",
            fontSize: "18px",
            color: "#18388C",
          }}
        >
          <b>{props.value} DKK</b>
        </p>
      </div>
    );
  }
}

export default Value;
