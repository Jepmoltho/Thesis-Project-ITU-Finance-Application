function Tag(props) {
  if (props.inline) {
    return (
      <div className="tag" style={{ display: "inline" }}>
        <p
          style={{
            margin: "0px",
            fontSize: "12px",
            color: "rgba(0, 0, 0, 0.55)",
            display: "inline",
          }}
        >
          <nobr>{props.text}</nobr>
        </p>
      </div>
    );
  } else
    return (
      <div className="tag">
        <p
          style={{
            margin: "0px",
            fontSize: "12px",
            color: "rgba(0, 0, 0, 0.55)",
          }}
        >
          <nobr>{props.text}</nobr>
        </p>
      </div>
    );
}

export default Tag;
