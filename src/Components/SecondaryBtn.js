function SecondaryBtn(props) {
  if (props.type === "cancel") {
    return (
      <div className="primarybtn">
        <button
          style={{
            textAlign: "center",
            background: "#E5E5E5",
            borderRadius: "4.43335px",
            minWidth: "75px",
          }}
        >
          <p style={{ fontSize: "12px", color: "black", marginBottom: "0px" }}>
            Cancel
          </p>
        </button>
      </div>
    );
  }

  if (props.type === "delete") {
    return (
      <div className="primarybtn">
        <button
          style={{
            textAlign: "center",
            background: "#E5E5E5",
            borderRadius: "4.43335px",
            minWidth: "75px",
          }}
        >
          <p style={{ fontSize: "12px", color: "black", marginBottom: "0px" }}>
            Delete
          </p>
        </button>
      </div>
    );
  }
}

export default SecondaryBtn;
