function NumberOfAssets(props) {
  return (
    <div className="numberOfAssets">
      <p
        style={{
          fontSize: "12px",
          margin: "0px",
          position: "relative",
          top: "-3px",
        }}
      >
        Number of assets: {props.amount}
      </p>
    </div>
  );
}

export default NumberOfAssets;
