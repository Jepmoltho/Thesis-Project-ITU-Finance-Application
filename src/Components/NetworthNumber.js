function NetworthNumber(props) {
  if (props.overviewcard) {
    return (
      <div>
        <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
          <b>Networth</b>
        </p>
        <p
          name="-"
          style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
        >
          <b>1500000 DKK</b>
        </p>
      </div>
    );
  } else {
    return (
      <h2 style={{ color: "#18388C", fontWeight: "bold" }}>
        {props.value} DKK
      </h2>
    );
  }
}

export default NetworthNumber;
