import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import Icon from "./Icon";

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
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            Assets total
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            1500000 DKK
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "0px 10px 0px 10px" }}>
        <Col style={{ paddingLeft: "0px", paddingBottom: "0px" }}>
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            Debt total
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            1500000 DKK
          </p>
        </Col>
      </Row>
      <Row style={{ padding: "10px 10px 10px 10px" }}>
        <Col style={{ paddingLeft: "0px" }}>
          <p style={{ color: "#00145E", float: "left", marginBottom: "0px" }}>
            <b>Networth</b>
          </p>
          <p
            name="-"
            style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
          >
            <b>1500000 DKK</b>
          </p>
        </Col>
      </Row>
    </div>

    // <Row>
    //   <Col
    //     name="overview-left"
    //     style={{
    //       paddingTop: "10px",
    //       paddingLeft: "0px",
    //       paddingRight: "0px",
    //       marginLeft: "10px",
    //       paddingBottom: "10px",
    //     }}
    //   >
    //     <div style={{ float: "left" }}>
    //       <Tag text="Overview" />
    //     </div>
    //     <div
    //       style={{
    //         float: "left",
    //         fontSize: "10px",
    //         position: "relative",
    //         top: "-3px",
    //         left: "4px",
    //       }}
    //     >
    //       <Icon infosmall />
    //     </div>
    //     <p style={{ color: "#00145E", marginTop: "34px", marginBottom: "7px" }}>
    //       Asset total
    //     </p>
    //     <p style={{ color: "#00145E", marginBottom: "7px" }}>Debt total</p>
    //     <p
    //       style={{ color: "#00145E", fontWeight: "bold", marginBottom: "0px" }}
    //     >
    //       Networth
    //     </p>
    //   </Col>
    //   <Col
    //     name="overview-right"
    //     style={{ paddingTop: "44px", paddingLeft: "0px", paddingRight: "10px" }}
    //   >
    //     <p style={{ color: "#00145E", marginBottom: "7px" }}>1500000 DKK</p>
    //     <p style={{ color: "#00145E", marginBottom: "7px" }}>1500000 DKK</p>
    //     <p style={{ color: "#00145E", fontWeight: "bold" }}>1500000 DKK</p>
    //   </Col>
    // </Row>
  );
}

// <Row>
// <Col
//   name="overview-left"
//   style={{
//     paddingTop: "10px",
//     paddingLeft: "0px",
//     paddingRight: "0px",
//     marginLeft: "10px",
//     paddingBottom: "10px",
//   }}
// >
//   <div style={{ float: "left" }}>
//     <Tag text="Overview" />
//   </div>
//   <div
//     style={{
//       float: "left",
//       fontSize: "10px",
//       position: "relative",
//       top: "-3px",
//       left: "4px",
//     }}
//   >
//     <Icon infosmall />
//   </div>
//   <p style={{ color: "#00145E", marginTop: "34px", marginBottom: "7px" }}>
//     Asset total
//   </p>
//   <p style={{ color: "#00145E", marginBottom: "7px" }}>Debt total</p>
//   <p
//     style={{ color: "#00145E", fontWeight: "bold", marginBottom: "0px" }}
//   >
//     Networth
//   </p>
// </Col>
// <Col
//   name="overview-right"
//   style={{ paddingTop: "44px", paddingLeft: "0px", paddingRight: "10px" }}
// >
//   <p style={{ color: "#00145E", marginBottom: "7px" }}>1500000 DKK</p>
//   <p style={{ color: "#00145E", marginBottom: "7px" }}>1500000 DKK</p>
//   <p style={{ color: "#00145E", fontWeight: "bold" }}>1500000 DKK</p>
// </Col>
// </Row>

{
  /* <div className="goalbox">
<Row style={{ padding: "10px" }}>
  <Col style={{}}>
    <Tag inline text="Goal" style={{ display: "inline" }} />
    <Icon infosmall style={{ position: "relative", top: "-10px" }} />
    <Icon edit style={{ position: "relative", float: "right" }} />
  </Col>
</Row>
<Row style={{ padding: "10px" }}>
  <Col>
    <p style={{ color: "#00145E", float: "left", marginBottom: "7px" }}>
      Goal
    </p>
    <p
      name="-"
      style={{ color: "#00145E", float: "right", marginBottom: "0px" }}
    >
      {props.goal === undefined ? "-" : props.goal}
    </p>
  </Col>
</Row>
<Row style={{ padding: "10px", paddingBottom: "20px" }}>
  <ProgressBar completed="80" style={{ position: "relative" }} />
</Row>
</div> */
}

export default Overview;
