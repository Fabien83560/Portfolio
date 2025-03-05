import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/outil-presentation.webp";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaServer, FaDesktop } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

function OutilPresentation() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              Outil de <strong className="purple">Présentation</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Outil de Présentation" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  Cet outil de visualisation de diapositives, développé en React, met à disposition une bibliothèque de composants prédéfinis permettant d'agencer des diaporamas personnalisés. Réalisé dans le cadre de la ressource R4.A.10 - Compléments web lors de ma 2ème année de BUT Informatique, ce projet offre une alternative flexible aux solutions de présentation traditionnelles, permettant un contrôle précis sur chaque élément et une personnalisation avancée.
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
                    { name: "React", xs: 6, md: 2 },
                    { name: "JavaScript", xs: 6, md: 2 },
                    { name: "Tailwind", xs: 6, md: 2 },
                    { name: "Vite", xs: 6, md: 2 },
                    { name: "CI/CD", xs: 6, md: 2 },
                    { name: "GitHub", xs: 6, md: 2 }
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
                  Les outils de présentation traditionnels comme PowerPoint ou Google Slides offrent une expérience accessible mais souvent limitée en termes de personnalisation pour les développeurs. Ces outils ne permettent pas de créer des composants réutilisables avec un contrôle précis sur le positionnement, le style et le comportement. De plus, ils ne s'intègrent pas facilement dans un workflow de développement moderne avec versionnement et déploiement continu.
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
                  L'outil de présentation propose une approche basée sur les composants React, où chaque élément de la présentation (titres, paragraphes, images, code, etc.) est un composant configurable via des propriétés. Cette architecture permet une flexibilité totale dans la construction de diaporamas, avec un contrôle précis sur chaque élément. Le système utilise Tailwind CSS pour le styling, offrant une interface réactive et élégante, tout en maintenant la possibilité d'utiliser le versionnement Git et le déploiement automatisé.
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
                      Fonctionnalités clés
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Bibliothèque de composants prédéfinis et personnalisables",
                    "Navigation intuitive entre les diapositives",
                    "Mode présentation plein écran",
                    "Affichage mosaïque des diapositives",
                    "Transitions animées entre les diapositives",
                    "Affichage de code avec coloration syntaxique",
                    "Support du Markdown pour le contenu riche",
                    "Mise en page flexible à une ou deux colonnes",
                    "Contrôle précis du positionnement des éléments"
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
                      Architecture
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Architecture basée sur les composants React",
                    "Système de contexte React pour la gestion d'état global",
                    "Utilisation de hooks personnalisés (useSlideCount, useFullScreen)",
                    "Styling avec Tailwind CSS pour une interface responsive",
                    "Animations CSS pour les transitions entre diapositives",
                    "Intégration de React Markdown pour le rendu Markdown",
                    "Système d'événements pour la navigation clavier",
                    "Déploiement automatisé via GitHub Actions",
                    "Build optimisé avec Vite pour des performances maximales"
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                          <FaServer className="purple" size={12} />
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

        <Row className="mb-5">
          <Col lg={12}>
            <Card className="study-card-view">
              <Card.Body>
                <Row>
                  <Col xs={12} md={1} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                    <div className="d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.2)" }}>
                      <FaDesktop className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Composants disponibles
                    </Card.Title>
                    <Row>
                      <Col md={6}>
                        <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                          {[
                            "Title - Titres personnalisables avec différentes tailles et couleurs",
                            "Paragraph - Texte avec options de mise en forme",
                            "Image - Insertion d'images avec positionnement flexible",
                            "Figure - Images avec légende",
                            "List - Listes à puces ou numérotées"
                          ].map((item, index) => (
                            <li key={index} className="mb-2">
                              <div className="d-flex align-items-center">
                                <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                  <FaCog className="purple" size={12} />
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
                            "Table - Tableaux de données formatés",
                            "TwoColumn - Mise en page à deux colonnes",
                            "Code - Affichage de code avec coloration syntaxique",
                            "Markdown - Contenu en format Markdown",
                            "Button - Boutons interactifs personnalisables"
                          ].map((item, index) => (
                            <li key={index} className="mb-2">
                              <div className="d-flex align-items-center">
                                <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                  <FaCog className="purple" size={12} />
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
                        "Développement avancé de composants React",
                        "Gestion d'état avec Context API",
                        "Styling avec Tailwind CSS",
                        "Animation CSS pour les transitions"
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
                        "Architecture d'application React",
                        "Optimisation des performances",
                        "CI/CD avec GitHub Actions",
                        "Design responsive et ergonomique"
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
            <Col md={5} className="text-center mb-3">
              <a href="https://github.com/Fabien83560/react-slides" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" style={{ width: '100%', margin: '5px' }}>
                  <BsGithub /> &nbsp;
                  {"Voir sur GitHub"}
                </Button>
              </a>
            </Col>
            <Col md={5} className="text-center mb-3">
              <a href="https://slides.ortegaf.fr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" style={{ width: '100%', margin: '5px' }}>
                  <CgWebsite /> &nbsp;
                  {"Accéder à la démo"}
                </Button>
              </a>
            </Col>
          </Row>
        </Card>

      </Container>
    </Container>
  );
}

export default OutilPresentation;