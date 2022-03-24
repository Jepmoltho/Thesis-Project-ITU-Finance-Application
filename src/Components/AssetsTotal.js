function AssetsTotal(props) {
  return (
    <div className="assetsTotal">
      <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
        Assets total
      </p>
      <p
        name="-"
        style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
      >
        {props.assetsTotal} DKK
      </p>
    </div>
  );
}

export default AssetsTotal;
