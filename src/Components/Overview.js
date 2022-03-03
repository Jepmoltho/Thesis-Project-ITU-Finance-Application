import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";


function Overview(){
    return (

            <Row>
                <Col>
                    <Tag text="Overview"/>
                    <p style={{ color: "#00145E"}}>Asset</p>     
                    <p style={{ color: "#00145E"}}>Debt</p>     
                    <p style={{ color: "#00145E", fontWeight: "bold"}}>Networth</p>     

                </Col>
                <Col style={{ paddingTop: "20px" }}>
                    <p style={{ color: "#00145E"}}>1500000 DKK</p>
                    <p style={{ color: "#00145E"}}>1500000 DKK</p>
                    <p style={{ color: "#00145E" , fontWeight: "bold"}}>1500000 DKK</p>
                </Col>
            </Row>
    )
}

export default Overview