function CategoryIcon(props) {
  const {categoryIcon} = props;
  
  return (
    <div className="categoryIcon" style={{ textAlign: "center" }}>
      <img
        src="/CategoryIcon.png"
        alt="tempAlt"
        style={{ maxWidth: "40px", display: "inline" }}
      ></img>
    </div>
  );
}

export default CategoryIcon;
