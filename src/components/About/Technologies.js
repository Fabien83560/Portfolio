import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import MariaDBLogo from "../../Assets/About/mariadb.svg";
import MysqlLogo from "../../Assets/About/mysql.svg";
import PostgreSQLLogo from "../../Assets/About/postgresql.svg";
import SqliteLogo from "../../Assets/About/sqlite.svg";
import MongoDBLogo from "../../Assets/About/mongoDB.svg";
import NpmLogo from "../../Assets/About/npm.svg";
import NodeJSLogo from "../../Assets/About/nodejs.svg";
import ViteLogo from "../../Assets/About/vite.svg";
import WebpackLogo from "../../Assets/About/webpack.svg";
import MavenLogo from "../../Assets/About/maven.svg";
import CiCdLogo from "../../Assets/About/cicd.png";
import NginxLogo from "../../Assets/About/nginx.svg";
import ApacheLogo from "../../Assets/About/apache.svg";
import CaddyLogo from "../../Assets/About/caddy.svg";
import OpenGLLogo from "../../Assets/About/opengl.svg";

const techs = [
  { icon: <img src={MariaDBLogo} alt="MariaDB Logo" style={{ width: "3rem", height: "3rem" }} />, name: "MariaDB", url: "https://mariadb.org/" },
  { icon: <img src={MysqlLogo} alt="MySQL Logo" style={{ width: "3rem", height: "3rem" }} />, name: "MySQL", url: "https://www.mysql.com/" },
  { icon: <img src={PostgreSQLLogo} alt="PostgreSQL Logo" style={{ width: "3rem", height: "3rem" }} />, name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { icon: <img src={SqliteLogo} alt="Sqlite Logo" style={{ width: "3rem", height: "3rem" }} />, name: "SQLite", url: "https://www.sqlite.org/" },
  { icon: <img src={MongoDBLogo} alt="MongoDB Logo" style={{ width: "3rem", height: "3rem" }} />, name: "MongoDB", url: "https://www.mongodb.com/" },
  { icon: <img src={NpmLogo} alt="Npm Logo" style={{ width: "3rem", height: "3rem" }} />, name: "NPM", url: "https://www.npmjs.com/" },
  { icon: <img src={NodeJSLogo} alt="NodeJS Logo" style={{ width: "3rem", height: "3rem" }} />, name: "NodeJS", url: "https://nodejs.org/" },
  { icon: <img src={ViteLogo} alt="Vite Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Vite", url: "https://vitejs.dev/" },
  { icon: <img src={WebpackLogo} alt="Webpack Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Webpack", url: "https://webpack.js.org/" },
  { icon: <img src={MavenLogo} alt="Maven Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Maven", url: "https://maven.apache.org/" },
  { icon: <img src={CiCdLogo} alt="CI / CD Logo" style={{ width: "3rem", height: "3rem" }} />, name: "CI/CD", url: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" },
  { icon: <img src={NginxLogo} alt="Nginx Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Nginx", url: "https://nginx.org/" },
  { icon: <img src={ApacheLogo} alt="Apache Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Apache", url: "https://httpd.apache.org/" },
  { icon: <img src={CaddyLogo} alt="Caddy Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Caddy", url: "https://caddyserver.com/" },
  { icon: <img src={OpenGLLogo} alt="OpenGL Logo" style={{ width: "3rem", height: "3rem" }} />, name: "OpenGL", url: "https://www.opengl.org/" },
];

function Techstack() {
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

export default Techstack;
