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
import EditAsset from "./EditAsset";
import AddAssetBtn from "./AddAssetBtn";
import { deleteAsset, putAsset, getAssets } from "../data";
//Dialogue components from here
import * as React from "react"; //Maybe delete "* as" to save computational power
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useEffect } from "react";

function Category(props) {
  //Saves the number of assets in a category to localStorage using this category's id as key value pair
  let no = 0;
  function setNoOfAssets(catId) {
    no++;
    localStorage.setItem(catId, no);
  }

  //Manages the delete asset event
  function deleteAssetHandler(assetId) {
    deleteAsset(assetId);
    //Rerender after: Add an await above and rerender here
  }

  //Save button in dialogue box needs to do this
  async function updateAssetHandler(assetId, newName, newValue) {
    putAsset(assetId, newName, newValue);
    //getAssets();
    handleClose();
    //Rerender after: Add an await above and rerender here
  }

  //Logic for dialogue box from here
  const [open, setOpen] = React.useState(false);

  //Edit button on asset needs to do this
  const [newAssetName, setNewAssetName] = useState("");
  const setNewAssetNameHandler = (e) => {
    setNewAssetName(e.target.value);
  };

  //UseEffect for updating new asset name
  // useEffect(() => {
  //   console.log(newAssetName);
  // }, [newAssetName]);

  //Edit button on asset needs to do this (maybe use ints)
  const [newAssetValue, setNewAssetValue] = useState("");
  const setNewAssetValueHandler = (e) => {
    setNewAssetValue(e.target.value);
  };

  //UseEffect for updating new asset name
  // useEffect(() => {
  //   console.log(newAssetValue);
  // }, [newAssetValue]);

  function handleClickOpen(assetId) {
    localStorage.setItem("assetIdForEdit", assetId); //HERE
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-4">
      <Row className="category">
        <Col className="col-sm-1" style={{ margin: "auto" }}>
          {props.title === "Stocks" ? (
            <CategoryIcon categoryIcon="Stocks" />
          ) : props.title === "Real Estate" ? (
            <CategoryIcon categoryIcon="RealEstate" />
          ) : props.title === "Crypto" ? (
            <CategoryIcon categoryIcon="Crypto" />
          ) : (
            <CategoryIcon categoryIcon="Savings" />
          )}
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
          {/*Display number of assets retrived from localstorage*/}
          <NumberOfAssets
            amount={
              localStorage.getItem(props.categoryId) > 0
                ? localStorage.getItem(props.categoryId)
                : 0
            }
          />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Value" />
          {props.value ? <Value value={props.value} /> : <Value value={0} />}
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
          {/*<Icon edit /> //Removed for now untill implementation - Editing assets and categories is a very complex problem due to the way we have build it. We can achieve same funcitonality of letting users "update" stuff by letting them delete assets and categories and then they can add new ones */}
          <Icon delete event1={props.eventDeleteCategory} />
        </Col>
      </Row>
      {/* -------------- Assets ----------------------- */}
      <Row>
        {props.assets.map((asset) =>
          asset.attributes.categoryId === props.categoryId ? (
            <>
              {setNoOfAssets(props.categoryId)}
              <Asset
                key={asset.id}
                title={asset.get("name")}
                value={asset.get("value")}
                eventUpdate={() => handleClickOpen(asset.id)} //Make the state of newname and value from dialogue box live here
                eventDelete={() => deleteAssetHandler(asset.id)}
              />
            </>
          ) : null
        )}
      </Row>
      {/* -------------- Add new asset ----------------------- */}
      <Row>
        {props.visibleAddAsset.map((ele) => {
          return ele.id === props.categoryId ? (
            ele.isVisible ? (
              props.title === "Real Estate" ? (
                <EditAsset
                  key={ele.id}
                  category="realestate" // Renders real estate asset
                  eventCancel={props.eventCancel}
                  eventSave={props.eventSave}
                  eventSaveAssetRealestateM2={props.eventSaveAssetRealestateM2}
                />
              ) : props.title === "Bank account" ? (
                <EditAsset
                  key={ele.id}
                  category="bank" // Renders bank asset
                  eventCancel={props.eventCancel}
                  eventSave={props.eventSave}
                />
              ) : (
                <EditAsset // Normal asset
                  key={ele.id}
                  eventCancel={props.eventCancel}
                  eventSave={props.eventSave}
                />
              )
            ) : null
          ) : null;
        })}
      </Row>

      <div>
        <center>
          <AddAssetBtn event1={props.eventAddAsset} />
        </center>
      </div>
      {/* JSX for dialgoue box from here */}
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update asset</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter a new name and value for the asset you want to update
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New name"
              type=""
              placeholder=""
              fullWidth
              variant="standard"
              value={newAssetName} //You can do conditional rendering here for oldname and newnave
              onChange={setNewAssetNameHandler}
            />
            <TextField
              autoFocus
              margin="dense"
              id="value"
              label="New value"
              type=""
              fullWidth
              variant="standard"
              value={newAssetValue}
              onChange={setNewAssetValueHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() =>
                updateAssetHandler(
                  localStorage.getItem("assetIdForEdit"),
                  newAssetName,
                  newAssetValue
                )
              }
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Category;

// let noOfAssets = props.assets.length; //If you need the total number of assets across all categories

// const [catNoOfAssets, setcatNoOfAssets] = useState([]);

// function catNoOfAssetsHandler() {
//   let categoryIdAsString = toString(props.categoryId);
//   setcatNoOfAssets(getNoOfAssetsPrCategory(categoryIdAsString));
// }

// useEffect(() => {
//   catNoOfAssetsHandler();
// }, []);

//const [noOfAssets, setNoOfAssets] = useState(0);

// Debugging code for noOfAsset logic
// <Row>
//   {props.assets.map((asset) =>
//     asset.attributes.categoryId === props.categoryId ? (
//       <>
//         {console.log(props.categoryId)}
//         {setNoOfAssets(props.categoryId)}
//         {console.log(no)}

//         <Asset
//           key={asset.id}
//           title={asset.get("name")}
//           value={asset.get("value")}
//           eventUpdate={() => updateAssetHandler(asset.id)}
//           eventDelete={() => deleteAssetHandler(asset.id)}
//         />
//       </>
//     ) : null
//   )}
// </Row>
