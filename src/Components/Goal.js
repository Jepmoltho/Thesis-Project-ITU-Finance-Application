import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";


function Goal(props){
    return (
        <div style={{ paddingTop:"10px", paddingLeft:"16px", paddingRight:"0px"}}>
            <div style={{float: "left"}}>
                <Tag text="Goal"/>
            </div>
            <div style={{float: "left", fontSize: "10px"}}>
                Logo
            </div>
            <div style={{float: "right", fontSize: "10px", paddingRight: "10px"}}>
                edit
            </div>             
            <div>
                <p style={{ color: "#00145E", marginTop: "34px", marginBottom: "7px" }}>Goal</p>     
            </div>
            <div> Progress bar</div>
        </div>
            

    
    )
}

export default Goal