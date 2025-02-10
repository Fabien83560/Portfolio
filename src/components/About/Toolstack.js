import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import LinuxLogo from "../../Assets/About/linux.svg";
import WindowsLogo from "../../Assets/About/windows.svg";
import GitLogo from "../../Assets/About/git.svg";
import GitHubLogo from "../../Assets/About/github.svg";
import GitLabLogo from "../../Assets/About/gitlab.svg";
import DockerLogo from "../../Assets/About/docker.svg";
import DockerComposeLogo from "../../Assets/About/dockercompose.svg";
import PortainerLogo from "../../Assets/About/portainer.svg";
import VisualStudicoCode from "../../Assets/About/vscode.svg";
import IntellijiJLogo from "../../Assets/About/intellij.svg";
import JiraLogo from "../../Assets/About/jira.svg";
import TrelloLogo from "../../Assets/About/trello.svg";

const tools = [
  { icon: <img src={LinuxLogo} alt="Linux Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Linux", url: "https://www.linux.org/" },
  { icon: <img src={WindowsLogo} alt="Windiws Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Windows", url: "https://www.microsoft.com/windows" },
  { icon: <img src={GitLogo} alt="Git Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Git", url: "https://git-scm.com/" },
  { icon: <img src={GitHubLogo} alt="GitHub Logo" style={{ width: "3rem", height: "3rem" }} />, name: "GitHub", url: "https://github.com/" },
  { icon: <img src={GitLabLogo} alt="GitLab Logo" style={{ width: "3rem", height: "3rem" }} />, name: "GitLab", url: "https://gitlab.com/" },
  { icon: <img src={DockerLogo} alt="Docker Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Docker", url: "https://www.docker.com/" },
  { icon: <img src={DockerComposeLogo} alt="Docker-Compose Logo" style={{ width: "3rem", height: "3rem" }} />, name: "docker-compose", url: "https://docs.docker.com/compose/" },
  { icon: <img src={PortainerLogo} alt="Portainer Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Portainer", url: "https://www.portainer.io/" },
  { icon: <img src={VisualStudicoCode} alt="VsCode Logo" style={{ width: "3rem", height: "3rem" }} />, name: "VS Code", url: "https://code.visualstudio.com/" },
  { icon: <img src={IntellijiJLogo} alt="IntellijiLogo Logo" style={{ width: "3rem", height: "3rem" }} />, name: "IntelliJ IDEA", url: "https://www.jetbrains.com/idea/" },
  { icon: <img src={JiraLogo} alt="Jira Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Jira", url: "https://www.atlassian.com/software/jira" },
  { icon: <img src={TrelloLogo} alt="trello Logo" style={{ width: "3rem", height: "3rem" }} />, name: "Trello", url: "https://trello.com/" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={3}
          md={1}
          className="tech-icons"
          onClick={() => window.open(tool.url, "_blank")}
          style={{ cursor: "pointer", textAlign: "center" }}
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div style={{ fontSize: "3rem" }}>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
