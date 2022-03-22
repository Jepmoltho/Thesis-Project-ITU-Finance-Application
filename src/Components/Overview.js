import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import Icon from "./Icon";
import AssetsTotal from "./AssetsTotal";
import DebtTotal from "./DebtTotal";
import NetworthNumber from "./NetworthNumber";

function Overview(props) {
  return (
    <div className="overviewbox">
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <Tag inline text="Goal" style={{ display: "inline" }} />
          <Icon infosmall style={{ position: "relative", top: "-10px" }} />
        </Col>
      </Row>
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <AssetsTotal assetsTotal={props.assetsTotal} />
        </Col>
      </Row>
      <Row style={{ padding: "0px 10px 0px 10px" }}>
        <Col style={{ paddingLeft: "0px", paddingBottom: "0px" }}>
          <DebtTotal debtTotal={props.debtTotal} />
        </Col>
      </Row>
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <NetworthNumber overviewcard networth={props.netWorth} />
        </Col>
      </Row>
    </div>
  );
}

export default Overview;
