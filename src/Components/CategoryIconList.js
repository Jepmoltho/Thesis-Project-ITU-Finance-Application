import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";

import SelectCategoryIconContainer from "./SelectCategoryIconContainer";


function CategoryIconList(props){

    return (
            <Row name="alignmentWrapper" className="justify-content-md-center" >
                <Row name="box" className="col-sm-4" 
                    style={{ zIndex: "+1", position: "relative", top: "0px", backgroundColor: "#cdced2", borderRadius: "5.87px", margin: "0px", padding:"0px", filter: "drop-shadow(5px 5px 17px rgba(0, 0, 0, 0.25))"}}>
                    
                    <Row name="icon rows" className="justify-content-md-center" style={{ maxHeight: "270px", overflowY: "scroll", paddingRight: "0px", marginRight: "0px"}}>
                        <SelectCategoryIconContainer icon={"Bike"} />
                        <SelectCategoryIconContainer icon={"Boat"} />
                        <SelectCategoryIconContainer icon={"Bond"} />
                        <SelectCategoryIconContainer icon={"Book"} />
                        <SelectCategoryIconContainer icon={"Camera"} />
                        <SelectCategoryIconContainer icon={"Cash"} />
                        <SelectCategoryIconContainer icon={"Comic"} />
                        <SelectCategoryIconContainer icon={"Computer"} />
                        <SelectCategoryIconContainer icon={"Crypto"} />
                        <SelectCategoryIconContainer icon={"Diamond"} />
                        <SelectCategoryIconContainer icon={"Dj"} />
                        <SelectCategoryIconContainer icon={"Energy"} />
                        <SelectCategoryIconContainer icon={"ETF"} />
                        <SelectCategoryIconContainer icon={"Goald"} />
                        <SelectCategoryIconContainer icon={"Guitar"} />
                        <SelectCategoryIconContainer icon={"Magazine"} />
                        <SelectCategoryIconContainer icon={"Music"} />
                        <SelectCategoryIconContainer icon={"Rawmaterial"} />
                        <SelectCategoryIconContainer icon={"RealEstate"} />
                        <SelectCategoryIconContainer icon={"Savings"} />
                        <SelectCategoryIconContainer icon={"Stocks"} />
                        <SelectCategoryIconContainer icon={"Windpower"} />
                    </Row>
                </Row>
            </Row>
    )            
}

export default CategoryIconList