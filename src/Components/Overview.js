import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";


function Overview(props){
    return (

            <Row>
                <Col name="overview-left" style={{ paddingTop:"10px", paddingLeft:"0px", paddingRight:"0px", marginLeft:"10px", paddingBottom: "10px" }}>
                    <div style={{float: "left"}}>
                        <Tag text="Overview"/>
                    </div>
                    <div style={{float: "left", fontSize: "10px"}}>
                        Logo
                    </div>
                    <p style={{ color: "#00145E", marginTop: "34px", marginBottom: "7px" }}>Asset total</p>     
                    <p style={{ color: "#00145E", marginBottom: "7px"}}>Debt total</p>     
                    <p style={{ color: "#00145E", fontWeight: "bold", marginBottom: "0px"}}>Networth</p>     
                    
                </Col>
                <Col name="overview-right" style={{  paddingTop:"44px", paddingLeft:"0px", paddingRight:"10px" }}>
                    <p style={{ color: "#00145E", marginBottom: "7px"}}>1500000 DKK</p>
                    <p style={{ color: "#00145E", marginBottom: "7px"}}>1500000 DKK</p>
                    <p style={{ color: "#00145E" , fontWeight: "bold"}}>1500000 DKK</p>
                </Col>
            </Row>
    )
}

export default Overview