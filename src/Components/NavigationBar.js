import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from 'react-bootstrap/Navbar'
import Logo from './Logo'
import Container from 'react-bootstrap/Container'

function NavigationBar(){
    return(
        <Container>
            <Navbar className='navigationBar' expand='true' fixed='top' style={{margin: 0, paddingBottom: '1%'}}>
                <Logo/>
            </Navbar>
        </Container>
        /*
        <Row className="navigationBar">
            <div className="NavigationBar" style={{}}>

            </div>

        </Row>
        */
    );
}

export default NavigationBar;