import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import Value from "./Value";
import CategoryProfit from "./CategoryProfit";
import NumberOfAssets from "./NumberOfAssets";
import CategoryIcon from "./CategoryIcon";
import Icon from "./Icon";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Button from "@mui/material/Button";
import Asset from "../Components/Asset";
import EditAsset from "../Components/EditAsset"
// import { isVisible } from "@testing-library/user-event/dist/utils";
import AddAssetBtn from "../Components/AddAssetBtn"


function Category(props) {


  // const [visibleAddAsset, setVisibleAddAsset] = useState(true);



  return (

    // --------------Category -----------------------
    <Row>
      <Row className="category">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          <CategoryIcon categoryIcon="Stocks" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <p
            style={{
              margin: "0px",
              color: "#18388C",
              fontSize: "20px",
              position: "relative",
              top: "3px",
            }}
          >
            <b>{props.title}</b>
          </p>
          <NumberOfAssets amount="3" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Value" />
          <Value value={props.value} />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Profit" />
          <CategoryProfit profit="3456" />
        </Col>
        <Col className="col-sm-1" style={{ margin: "auto", padding: "0px" }}>
          <nobr>
            <Button
              variant="text"
              style={{
                fontSize: "12px",
                color: "#18388C",
                left: "-10px",
              }}
            >
              View assets <ArrowDropDownRoundedIcon sx={{ color: "#18388C" }} />
            </Button>
          </nobr>
        </Col>
        <Col className="col-sm-1">
          <Icon edit />
          
          {/* Add new asset button*/}
          
          <Icon add event1={props.eventAddAsset}

          />
        </Col>
      </Row>


     {/* -------------- Asset -----------------------               */}
      <Row>        
          {props.assets.map((asset) => (
          asset.attributes.categoryId === props.categoryId ? 
            <Asset key={asset.id} title={asset.get("name")} /> 
            : null 
          ))} 
      </Row>



     {/* -------------- Add Asset -----------------------               */}
      <Row>
      {/* {console.log("props.visibleAddAsset.isVisible = " + props.visibleAddAsset.isVisible)}
      {console.log("props.visibleAddAsset.categoryId = " + props.visibleAddAsset.categoryId)}
      {console.log("props.categoryId = "+props.categoryId)} */}
      { 
        props.visibleAddAsset.isVisible ?
          props.title === "Real Estate" ?
            <EditAsset category="realestate"    // Renders real estate asset
              //eventCancel={() => setVisibleAddAsset(false)}
              //eventSave={() => saveAsset()}
            />
            : 
              props.title === "Bank account" ?
                <EditAsset category="bank"   // Renders bank asset
                //eventCancel={() => setVisibleAddAsset(false)}
                //eventSave={() => saveAsset()}
                />
              :
              <EditAsset  // Normal asset
                  //eventCancel={() => setVisibleAddAsset(false)}
                  //eventSave={() => saveAsset()}
              />
        :
          null
      }
      {/*
      <div className="visibleAddAsset">
              {visibleAddAsset ?
                isBankAccount() ?   // Checks if category name is equal Banck account
                      <EditAsset category="bank"   // Renders bank asset
                      eventCancel={() => setVisibleAddAsset(false)}
                      eventSave={() => saveAsset()}
                      /> 
                  :
                  isRealEstate() ?   // Checks if category name is equal real estate
                      <EditAsset category="realestate"    // Renders realestate asset
                        eventCancel={() => setVisibleAddAsset(false)}
                        eventSave={() => saveAsset()}
                      />
                    :   //If category name is neither an 'Bank account' or 'Real estate'.
                      <EditAsset  // Renders normal asset
                        eventCancel={() => setVisibleAddAsset(false)}
                        eventSave={() => saveAsset()}
                      />
                  : //Renders an empty containe, not sure how to implement
                    <div className="Empty container"></div>  
            }
          </div>
          */}
      </Row>

      <Row>
        <AddAssetBtn event1={props.eventAddAsset}/>
      </Row>


    </Row>
  );
}

export default Category;
