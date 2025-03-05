import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/outil-calibration.webp";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode } from "react-icons/fa";
import stageReport from "../../../Assets/Projects/BUTInfo_2024_Ortega_Fabien_approuved.pdf";

function OutilCalibration() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              Outil de <strong className="purple">Calibration des Caméras Infrarouge</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Outil de Calibration" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
          </Col>
        </Row>

        <Card className="study-card-view mb-5">
          <Card.Body>
            <Row>
              <Col xs={12} md={1} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                <div className="d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(199, 112, 240, 0.2)" }}>
                  <FaLightbulb className="purple" size={25} />
                </div>
              </Col>
              <Col xs={12} md={11}>
                <Card.Title className="purple fs-4 mb-3">
                  Présentation du projet
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Ce plugin pour ThermaVIP automatise la calibration des caméras infrarouge du Tokamak WEST au CEA Cadarache. Développé lors de mon stage de 2ème année de BUT Informatique, il permet de transformer un processus manuel long et sujet aux erreurs en une procédure automatisée, précise et rapide, essentielle pour garantir des mesures thermiques fiables dans le contexte exigeant de la recherche en fusion nucléaire.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row className="mb-5">
          <Col lg={12} className="mb-4">
            <Card className="study-card-view h-100">
              <Card.Body>
                <Row>
                  <Col xs={12} className="d-flex align-items-center mb-3">
                    <div className="d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(199, 112, 240, 0.15)" }}>
                      <FaCode className="purple" size={20} />
                    </div>
                    <Card.Title className="purple fs-5">
                      Technologies utilisées
                    </Card.Title>
                  </Col>
                </Row>
                <Row className="mt-3 justify-content-center">
                  {[
                    { name: "C++", xs: 6, md: 2 },
                    { name: "Qt", xs: 6, md: 2 },
                    { name: "CMake", xs: 6, md: 2 },
                    { name: "GitLab", xs: 6, md: 2 },
                    { name: "OpenCV", xs: 6, md: 2 }
                  ].map((tech, index) => (
                    <Col xs={tech.xs} md={tech.md} className="text-center mb-3 px-2" key={index}>
                      <div className="p-2 rounded" style={{ 
                        backgroundColor: `rgba(${150 + index * 10}, ${70 + index * 10}, ${240 - index * 10}, 0.2)`,
                        border: `1px solid rgba(${150 + index * 10}, ${70 + index * 10}, ${240 - index * 10}, 0.5)`,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <span style={{ color: "white", fontWeight: "500" }}>{tech.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="study-card-view h-100">
              <Card.Body>
                <Row>
                  <Col xs={12} className="d-flex align-items-center mb-3">
                    <div className="d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                      <FaTools className="purple" size={20} />
                    </div>
                    <Card.Title className="purple fs-5">
                      Problématique
                    </Card.Title>
                  </Col>
                </Row>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Avant mon intervention, la calibration des caméras infrarouge nécessitait des manipulations manuelles fastidieuses. Ce processus était chronophage, source d'erreurs humaines et manquait de standardisation, compromettant la fiabilité des mesures thermiques essentielles pour la sécurité et l'analyse des expériences de fusion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="study-card-view h-100">
              <Card.Body>
                <Row>
                  <Col xs={12} className="d-flex align-items-center mb-3">
                    <div className="d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(199, 112, 240, 0.15)" }}>
                      <FaCogs className="purple" size={20} />
                    </div>
                    <Card.Title className="purple fs-5">
                      Solution développée
                    </Card.Title>
                  </Col>
                </Row>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  J'ai développé un plugin avec une interface intuitive intégrée à ThermaVIP qui automatise entièrement le processus. Il utilise des algorithmes avancés de traitement d'image pour détecter les points essentiels d'une calibration et valider automatiquement les résultats, garantissant des mesures thermiques fiables et cohérentes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="study-card-view h-100">
              <Card.Body>
                <Row>
                  <Col xs={12} className="d-flex align-items-center mb-3">
                    <div className="d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                      <FaRocket className="purple" size={20} />
                    </div>
                    <Card.Title className="purple fs-5">
                      Défis techniques
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Intégration dans un logiciel existant complexe (ThermaVIP)",
                    "Développement d'algorithmes de détection robustes",
                    "Traitement d'images infrarouge",
                    "Calculs nécessitant une précision minutieuse",
                    "Optimisation des performances pour un traitement rapide"
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                          <FaRocket className="purple" size={12} />
                        </div>
                        <span>{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="study-card-view h-100">
              <Card.Body>
                <Row>
                  <Col xs={12} className="d-flex align-items-center mb-3">
                    <div className="d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                      <FaChartLine className="purple" size={20} />
                    </div>
                    <Card.Title className="purple fs-5">
                      Résultats et impact
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Réduction conséquente du temps de processus de création de calibration",
                    "Amélioration significative de la précision des mesures",
                    "Standardisation du processus de calibration",
                    "Intégration transparente avec les systèmes existants",
                    "Facilitation de l'accès aux données pour les chercheurs"
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                          <FaChartLine className="purple" size={12} />
                        </div>
                        <span>{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="study-card-view mb-5">
          <Card.Body>
            <Row>
              <Col xs={12} md={1} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                <div className="d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(113, 74, 186, 0.2)" }}>
                  <FaUserGraduate className="purple" size={25} />
                </div>
              </Col>
              <Col xs={12} md={11}>
                <Card.Title className="purple fs-4 mb-3">
                  Compétences développées
                </Card.Title>
                <Row>
                  <Col md={6}>
                    <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                      {[
                        "Programmation C++ avancée",
                        "Développement d'interfaces avec Qt",
                        "Traitement d'images avec OpenCV"
                      ].map((item, index) => (
                        <li key={index} className="mb-2">
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(113, 74, 186, 0.15)" }}>
                              <FaUserGraduate className="purple" size={12} />
                            </div>
                            <span>{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                      {[
                        "Intégration logicielle en environnement complexe",
                        "Collaboration avec des experts scientifiques",
                        "Gestion de projet technique"
                      ].map((item, index) => (
                        <li key={index} className="mb-2">
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(113, 74, 186, 0.15)" }}>
                              <FaUserGraduate className="purple" size={12} />
                            </div>
                            <span>{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={4} className="text-center">
              <a href={stageReport} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" style={{ width: '100%', margin: '5px' }}>
                  <CgWebsite /> &nbsp;
                  {"Consulter le Rapport de Stage"}
                </Button>
              </a>
            </Col>
          </Row>
        </Card>

      </Container>
    </Container>
  );
}

export default OutilCalibration;