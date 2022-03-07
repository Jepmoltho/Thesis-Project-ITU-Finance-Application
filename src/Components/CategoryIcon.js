function CategoryIcon(props) {
  const { categoryIcon } = props;

  function formate (props){
    return (
      <div className="categoryIcon" style={{ textAlign: "center" }}>
      <img
        src={`/${props.categoryIcon}CategoryIcon.svg`}
        alt="tempAlt"
        style={{ maxWidth: "40px", display: "inline" }}
      ></img>
    </div>
    );
  }
  
  switch (categoryIcon) {
    case 'Bike': return formate(props)
    case 'Boat': return formate(props)
    case 'Bond': return formate(props)
    case 'Book': return formate(props)
    case 'Camera': return formate(props)
    case 'Cash': return formate(props)
    case 'Comic': return formate(props)
    case 'Computer': return formate(props)
    case 'Crypto': return formate(props)
    case 'Diamond': return formate(props)
    case 'Dj': return formate(props)
    case 'Energy': return formate(props)
    case 'Environment': return formate(props)
    case 'ETF': return formate(props)
    case 'Goald': return formate(props)
    case 'Guitar': return formate(props)
    case 'Magazine': return formate(props)
    case 'Music': return formate(props)
    case 'Rawmaterial': return formate(props)
    case 'RealEstate': return formate(props)
    case 'Savings': return formate(props)
    case 'Stocks': return formate(props)
    case 'Windpower': return formate(props)
  }
}

export default CategoryIcon;