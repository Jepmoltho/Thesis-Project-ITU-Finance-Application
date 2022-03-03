function Tag(props) {
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
