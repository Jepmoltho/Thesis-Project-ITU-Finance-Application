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


function Category(props) {
  return (
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
          <Icon add event1={props.eventAddAsset} />
        </Col>
      </Row>
              
      <Row>        
          {props.assets.map((asset) => (
          asset.attributes.categoryId === props.categoryId ? 
            <Asset key={asset.id} title={asset.get("name")} /> 
            : null 
          ))} 
      </Row>

    </Row>
  );
}

export default Category;
