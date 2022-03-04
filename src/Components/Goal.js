import "bootstrap/dist/css/bootstrap.css";
import Tag from "./Tag";
import ProgressBar from "./ProgressBar"

function Goal(props){

    return (
        <div style={{ paddingTop:"10px", paddingLeft:"10px", paddingRight:"10px"}}>
            <div style={{float: "left"}}>
                <Tag text="Goal"/>
            </div>
            <div style={{float: "left", fontSize: "10px"}}>
                Logo
            </div>
            <div style={{float: "right", fontSize: "10px", paddingRight: "10px"}}>
                edit
            </div>             
            <div style={{marginTop: "34px"}}>
                <p name="goal" style={{ color: "#00145E", float: "left", marginBottom: "7px" }}>Goal</p>     
                <p name="-" style={{ color: "#00145E", float: "right", marginBottom: "0px" }}> {props.goal===undefined ? "-" : props.goal}</p>     
            </div>
            <div style={{paddingTop: "48px"}} >  
                <ProgressBar completed='80'/>
            </div>
        </div>
            

    
    )
}

export default Goal