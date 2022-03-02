function PrimaryBtn(props) {
  if (props.type === "edit") {
    return (
      <div className="primarybtn">
        <button
          style={{
            textAlign: "center",
            background: "#18388C",
            borderRadius: "4.43335px",
            minWidth: "75px",
          }}
        >
          <p style={{ fontSize: "12px", color: "white", marginBottom: "0px" }}>
            Edit
          </p>
        </button>
      </div>
    );
  }

  if (props.type === "save") {
    return (
      <div className="primarybtn">
        <button
          style={{
            textAlign: "center",
            background: "#18388C",
            borderRadius: "4.43335px",
            minWidth: "75px",
          }}
        >
          <p style={{ fontSize: "12px", color: "white", marginBottom: "0px" }}>
            Save
          </p>
        </button>
      </div>
    );
  }
}
export default PrimaryBtn;
