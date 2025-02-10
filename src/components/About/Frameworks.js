import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import QtLogo from "../../Assets/About/qt.svg";
import ReactLogo from "../../Assets/About/react.svg";
import TailwindLogo from "../../Assets/About/tailwindcss.svg";
import IonicLogo from "../../Assets/About/ionic.svg";
import Laravel from "../../Assets/About/laravel.svg";
import BootstrapLogo from "../../Assets/About/bootstrap.svg";
import FastApiLogo from "../../Assets/About/fastapi.svg";
import ThreeJSLogo from "../../Assets/About/threejs.svg";
import OpenCVLogo from "../../Assets/About/opencv.svg";

const techs = [
  { icon: <img src={QtLogo} alt="Qt Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Qt", url: "https://www.qt.io/" },
  { icon: <img src={ReactLogo} alt="react Logo" style={{ width: "3rem", height: "3rem" }} />, name: "React", url: "https://reactjs.org/" },
  { icon: <img src={TailwindLogo} alt="Tailwind Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { icon: <img src={IonicLogo} alt="Ionic Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Ionic", url: "https://ionicframework.com/" },
  { icon: <img src={Laravel} alt="Laravel Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Laravel", url: "https://laravel.com/" },
  { icon: <img src={BootstrapLogo} alt="Bootstrap Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Bootstrap", url: "https://getbootstrap.com/" },
  { icon: <img src={FastApiLogo} alt="FastAPI Logo" style={{ width: "3rem", height: "3rem" }} />, name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
  { icon: <img src={ThreeJSLogo} alt="ThreeJS Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Three.js", url: "https://threejs.org/" },
  { icon: <img src={OpenCVLogo} alt="OpenCV Logo" style={{ width: "3rem", height: "3rem" }} />, name: "OpenCV", url: "https://opencv.org/" },
];

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={3}
          md={1}
          className="tech-icons"
          onClick={() => window.open(tech.url, "_blank")}
          style={{ cursor: "pointer", textAlign: "center" }}
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Frameworks;