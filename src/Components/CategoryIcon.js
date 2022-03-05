function CategoryIcon(props) {
  const categoryIcon = props;

  if (props.categoryIcon === 'stocks'){
    return (
      <div className="categoryIcon" style={{ textAlign: "center" }}>
        <img
          src="/StocksCategoryIcon.svg"
          alt="tempAlt"
          style={{ maxWidth: "40px", display: "inline" }}
        ></img>
      </div>
    );
    } else {
      return (
        <div className="categoryIcon" style={{ textAlign: "center" }}>
          <img
            src="/WindpowerCategoryIcon.svg"
            alt="tempAlt"
            style={{ maxWidth: "40px", display: "inline" }}
          ></img>
        </div>
      );
    }
}

export default CategoryIcon;
