import { hover } from "@testing-library/user-event/dist/hover";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CategoryIcon from "./CategoryIcon";

function SelectCategoryIconContainer (props){
    
    return (
        <Row name="icon container" className="col-sm-6" style={{ marginTop: "10px"}}>
            <button className="button" >
                <Col name="img and text positioning" style={{textAlign:"left", paddingTop: "10px", paddingBottom: "10px", paddingRight: "0px", paddingLeft: "0px"}}>
                    <CategoryIcon categoryIcon={props.icon} />
                    <span > {props.icon} </span>            
                </Col>  
            </button>
        </Row>
    )
}

export default SelectCategoryIconContainer