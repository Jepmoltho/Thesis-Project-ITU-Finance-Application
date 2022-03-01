function CategoryValue(props) {
  return (
    <div className="categoryValue">
      <p style={{ margin: "0px", fontSize: "18px", color: "#18388C" }}>
        <b>{props.value} DKK</b>
      </p>
    </div>
  );
}

export default CategoryValue;
