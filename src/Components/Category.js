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
import { deleteAsset, putAsset } from "../data";

function Category(props) {
  //Manages the delete asset event
  function deleteAssetHandler(assetId) {
    deleteAsset(assetId);
    //Rerender after: Add an await above and rerender here
  }

  function updateAssetHandler(assetId) {
    putAsset(assetId);
    //Rerender after: Add an await above and rerender here
  }

  return (
    <div>
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
          <NumberOfAssets amount="3" />
        </Col>
        <Col style={{ margin: "auto" }}>
          <Tag text="Value" />
          {props.value ? <Value value={props.value} /> : <Value value={0} />}
          {/*<Value value={props.value} />*/}
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
            <Asset
              key={asset.id}
              title={asset.get("name")}
              value={asset.get("value")}
              eventUpdate={() => updateAssetHandler(asset.id)}
              eventDelete={() => deleteAssetHandler(asset.id)}
            />
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
    </div>
  );
}

export default Category;
