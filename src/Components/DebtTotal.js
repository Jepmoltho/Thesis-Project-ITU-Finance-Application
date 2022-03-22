function DebtTotal(props) {
  return (
    <div className="assetsTotal">
      <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
        Debt total
      </p>
      <p
        name="-"
        style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
      >
        {props.debtTotal} DKK
      </p>
    </div>
  );
}

export default DebtTotal;
