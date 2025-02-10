import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import CPlusPlusLogo from "../../Assets/About/cPlusPlus.svg";
import JavaLogo from "../../Assets/About/java.svg";
import HtmlLogo from "../../Assets/About/html.svg";
import CssLogo from "../../Assets/About/css.svg";
import JavaScriptLogo from "../../Assets/About/javascript.svg";
import TypeScriptLogo from "../../Assets/About/typescript.svg";
import PythonLogo from "../../Assets/About/python.svg";
import PhpLogo from "../../Assets/About/php.svg";
import BashLogo from "../../Assets/About/bash.svg";
import DatabaseLogo from "../../Assets/About/database.svg";

const techs = [
  { icon: <img src={CPlusPlusLogo} alt="C++ Logo" style={{ width: "3rem", height: "3rem" }} />, name: "C++", url: "https://isocpp.org/" },
  { icon: <img src={JavaLogo} alt="Java Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Java", url: "https://www.java.com/" },
  { icon: <img src={HtmlLogo} alt="Html Logo" style={{ width: "3rem", height: "3rem" }} />, name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <img src={CssLogo} alt="Css Logo" style={{ width: "3rem", height: "3rem" }} />, name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <img src={JavaScriptLogo} alt="JavaScript Logo" style={{ width: "3rem", height: "3rem" }} />, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <img src={TypeScriptLogo} alt="TypeScript Logo" style={{ width: "3rem", height: "3rem" }} />, name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { icon: <img src={PythonLogo} alt="Python Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Python", url: "https://www.python.org/" },
  { icon: <img src={PhpLogo} alt="PhP Logo" style={{ width: "3rem", height: "3rem" }} />, name: "PHP", url: "https://www.php.net/" },
  { icon: <img src={BashLogo} alt="Bash Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Bash", url: "https://www.gnu.org/software/bash/" },
  { icon: <img src={DatabaseLogo} alt="Database Logo" style={{ width: "3rem", height: "3rem" }} />, name: "SQL", url: "https://fr.wikipedia.org/wiki/Structured_Query_Language" },
];

function Languages() {
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

export default Languages;
