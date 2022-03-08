import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CategoryIcon from "./CategoryIcon";

function SelectCategoryIconContainer (props){
    return (
        <Row className="col-sm-6">
            <Col style={{ paddingTop: "10px", paddingBottom: "10px", paddingRight: "5px", paddingLeft: "0px"}}>
                {/* <img src="images/BikeCategoryIcon.svg" alt="SelectImgBtn"/> */}
                <CategoryIcon categoryIcon={props.icon} />
                <span> {props.icon} </span>            
            </Col>  
        </Row>
    )
}

export default SelectCategoryIconContainer