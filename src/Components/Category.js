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
import { deleteAsset, putAsset, saveCatValue } from "../data";
//Dialogue components from here
import * as React from "react"; //Maybe delete "* as" to save computational power
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";

function Category(props) {
  //Saves the number of assets in a category to localStorage using this category's id as key value pair
  let no = 0;
  function setNoOfAssets(catId) {
    no++;
    localStorage.setItem(catId, no);
  }

  //Manages the delete asset event //Maybe try and add await
  async function deleteAssetHandler(assetId, rerenderState, categoryId) {
    localStorage.setItem("categoryId", categoryId);
    await deleteAsset(assetId);
    await saveCatValue();
    handleDeleteClose();
    rerenderState();
  }

  //Save button in dialogue box needs to do this
  async function updateAssetHandler(
    assetId,
    newName,
    newValue,
    rerenderStateEdit
  ) {
    await putAsset(assetId, newName, newValue);
    await saveCatValue();
    handleEditClose();
    rerenderStateEdit();
  }

  //Logic for dialogue box starts from here
  const [editOpen, setEditOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  //Edit button on asset needs to do this
  const [newAssetName, setNewAssetName] = useState("");
  const setNewAssetNameHandler = (e) => {
    setNewAssetName(e.target.value);
  };

  //Edit button on asset needs to do this
  const [newAssetValue, setNewAssetValue] = useState("");
  const setNewAssetValueHandler = (e) => {
    setNewAssetValue(e.target.value);
  };

  //Opens dialogue box upon editAsset
  function handleEditClickOpen(assetId, assetName, categoryId) {
    //Note that it sets the initial assetName. Nessesary for the edit asset functionality so you don't have to type in the same name every time you update the value
    localStorage.setItem("categoryId", categoryId);
    localStorage.setItem("assetIdForEdit", assetId);
    setNewAssetName(assetName);
    setEditOpen(true);
  }

  function handleDeleteClickOpen(assetId, categoryId) {
    localStorage.setItem("categoryId", categoryId);
    localStorage.setItem("assetIdForEdit", assetId);
    setDeleteOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
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
              // --------------------Here-----------------------------
              variant="text"
              style={{
                fontSize: "12px",
                color: "#18388C",
                left: "-10px",
              }}
              onClick={props.viewAsset}
            >
              View assets <ArrowDropDownRoundedIcon sx={{ color: "#18388C" }} />
            </Button>
          </nobr>
        </Col>
        <Col className="col-sm-1">
          {/*<Icon edit /> //Removed for now untill implementation - Editing assets and categories is a very complex problem due to the way we have build it. We can achieve same funcitonality of letting users "update" stuff by letting them delete assets and categories and then they can add new ones */}
          <BurgerButton
            event1={props.eventDeleteCategory}
            event2={props.eventUpdateCategory}
          />
          {/* <Icon delete event1={props.eventDeleteCategory} /> */}
        </Col>
      </Row>
      {/* -------------- Assets ----------------------- */}
      <Row>
        {props.visibleAsset.map((asset) => {
          return (
            // open/close assets of the matches with the categoryId and checks if their visibility is true.
            asset.categoryId === props.categoryId && asset.isVisible ? (
              <>
                {setNoOfAssets(props.categoryId)}
                <Asset
                  key={asset.id}
                  title={asset.name}
                  value={asset.value}
                  eventUpdate={() =>
                    handleEditClickOpen(asset.id, asset.name, props.categoryId)
                  } //Make the state of newname and value from dialogue box live here
                  eventDelete={() =>
                    handleDeleteClickOpen(asset.id, props.categoryId)
                  }
                />
              </>
            ) : null
          );
        })}
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
      {/* -----------Edit dialog box---------------  */}
      <div>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>Update asset</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update the value of your asset
            </DialogContentText>

            <TextField
              required
              margin="dense"
              id="name"
              label="Name"
              type=""
              fullWidth
              variant="standard"
              value={newAssetName}
              onChange={setNewAssetNameHandler}
            />
            <TextField
              required
              margin="dense"
              id="value"
              label="Value"
              type="email"
              fullWidth
              variant="standard"
              value={newAssetValue}
              onChange={setNewAssetValueHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>
              Cancel
            </Button>
            <Button
              onClick={() =>
                updateAssetHandler(
                  localStorage.getItem("assetIdForEdit"),
                  newAssetName,
                  newAssetValue,
                  props.eventRerenderStateEdit
                )
              }
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* -----------Delete dialog box---------------  */}
      <div>
        <Dialog
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={handleDeleteClose}
              >
              No
            </Button>
            <Button onClick={() => 
              deleteAssetHandler(
                 localStorage.getItem("assetIdForEdit"),
                 props.eventRerenderState, 
                 props.categoryId
                 )} 
                 autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Category;
