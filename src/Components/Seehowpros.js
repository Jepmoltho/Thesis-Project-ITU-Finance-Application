import Icon from "./Icon";

function Seehowpros() {
  return (
    <span style={{ float: "right", position: "relative", top: "13px" }}>
      <a
        style={{
          fontStyle: "italic",
          display: "inline",
        }}
        href="https://investorjunkie.com/create-asset-allocation/"
      >
        See how the pros do it
      </a>
      <Icon info />
    </span>
  );
}

export default Seehowpros;
