import Icon from "./Icon";

function Seehowpros() {
  return (
    <span
      style={{ float: "right", position: "relative", top: "13px", zIndex: 1 }}
    >
      <a
        style={{
          fontStyle: "italic",
          display: "inline",
          float: "left",
        }}
        href="https://investorjunkie.com/create-asset-allocation/"
      >
        See how the pros do it
      </a>
      <Icon infosmall textInfo={"seeHowPros"} />
    </span>
  );
}

export default Seehowpros;
