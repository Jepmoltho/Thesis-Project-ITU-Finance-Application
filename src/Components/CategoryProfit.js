function CategoryProfit(props) {
  return (
    <div className="categoryProfit">
      <p style={{ margin: "0px", fontSize: "18px", color: "#9ABE54" }}>
        <b>{props.profit} DKK</b>
      </p>
    </div>
  );
}

export default CategoryProfit;
