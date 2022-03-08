import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CategoryIcon from "./CategoryIcon";

function SelectCategoryIconContainer (props){
    return (
        <Row name="icon container" className="col-sm-6">
            <Col name="img and text positioning" style={{ paddingTop: "10px", paddingBottom: "10px", paddingRight: "5px", paddingLeft: "0px"}}>
                <CategoryIcon categoryIcon={props.icon} />
                <span > {props.icon} </span>            
            </Col>  
        </Row>
    )
}

export default SelectCategoryIconContainer