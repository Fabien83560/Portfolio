import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/opengl.webp";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaDesktop } from "react-icons/fa";
import { SiOpengl } from "react-icons/si";

function DemonstrateurOpengl() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              Démonstrateur <strong className="purple">OpenGL</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Démonstrateur OpenGL" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  Ce projet est un démonstrateur pédagogique OpenGL qui illustre diverses techniques de rendu 3D et de modèles d'éclairage. Développé dans le cadre de mes études, il permet de visualiser et de manipuler différents objets 3D tout en expérimentant avec plusieurs algorithmes d'illumination (Phong, Blinn-Phong, Gaussian). Cet outil interactif facilite la compréhension des concepts fondamentaux de la programmation graphique, avec une interface utilisateur intuitive permettant d'ajuster en temps réel tous les paramètres de rendu.
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
                    { name: "OpenGL", xs: 6, md: 2 },
                    { name: "GLFW", xs: 6, md: 2 },
                    { name: "ImGui", xs: 6, md: 2 },
                    { name: "CMake", xs: 6, md: 2 },
                    { name: "GLSL", xs: 6, md: 2 }
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
                  L'apprentissage de la programmation graphique 3D et des concepts d'éclairage présente plusieurs défis, notamment la difficulté de visualiser les effets des différents algorithmes et paramètres. Les étudiants et développeurs débutants en infographie 3D manquent souvent d'outils intuitifs qui leur permettraient d'expérimenter avec ces concepts de manière interactive, rendant l'apprentissage plus abstrait et difficile. De plus, comprendre les différences subtiles entre les modèles d'éclairage comme Phong et Blinn-Phong nécessite de pouvoir les comparer côte à côte dans des conditions identiques.
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
                  J'ai développé un démonstrateur pédagogique qui sert de plateforme d'apprentissage interactif pour la programmation graphique OpenGL. L'application permet de charger dynamiquement différents modèles 3D et d'appliquer divers modèles d'éclairage tout en ajustant leurs paramètres en temps réel. Grâce à une interface ImGui intuitive, l'utilisateur peut modifier la position de la lumière, les couleurs, les intensités ambiantes et spéculaires, et observer immédiatement les changements. L'application inclut également des fonctionnalités supplémentaires comme l'affichage des normales, le mode wireframe, et une caméra orbitale interactive pour visualiser les objets sous tous les angles.
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
                    "Chargement dynamique de modèles 3D (.obj)",
                    "Choix entre plusieurs modèles d'éclairage",
                    "Contrôle intuitif de la caméra",
                    "Paramètres d'éclairage ajustables en temps réel",
                    "Affichage des normales des objets",
                    "Mode wireframe pour visualiser la géométrie",
                    "Grille de référence avec axes colorés",
                    "Indicateur visuel de la position de la lumière",
                    "Interface utilisateur intuitive avec ImGui"
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
                    "Architecture modulaire avec séparation des préoccupations",
                    "ShaderManager pour la gestion des programmes GLSL",
                    "RenderState encapsulant les paramètres de rendu actuels",
                    "Système de caméra orbitale pour la navigation 3D",
                    "Integration d'ImGui pour l'interface utilisateur interactive",
                    "Chargement dynamique des objets et ressources",
                    "Implémentation des shaders pour chaque modèle d'éclairage",
                    "Système de callbacks pour la gestion des événements utilisateur",
                    "CMake pour la gestion de build multi-plateforme"
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                          <SiOpengl className="purple" size={12} />
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
                      Modèles d'éclairage implémentés
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      L'application implémente plusieurs modèles d'éclairage, chacun avec ses propres caractéristiques. Le <strong className="purple">mode Basic</strong> affiche simplement l'objet avec sa couleur définie, sans calcul d'éclairage. Le <strong className="purple">modèle de Phong</strong> calcule l'éclairage en combinant trois composantes : ambiante (éclairage global uniforme), diffuse (réflexion de la lumière en fonction de l'angle d'incidence) et spéculaire (points brillants sur les surfaces). Le <strong className="purple">modèle de Blinn-Phong</strong> est une variante optimisée qui remplace le calcul de réflexion par un "half-vector" entre la direction de la lumière et celle de l'observateur. Enfin, le <strong className="purple">modèle Gaussian</strong> utilise une distribution gaussienne pour les reflets spéculaires, produisant des transitions plus douces et réalistes.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Chaque modèle est implémenté dans son propre shader GLSL, permettant d'observer les différences visuelles entre les techniques et de comprendre les avantages et inconvénients de chaque approche. L'interface utilisateur permet d'ajuster tous les paramètres pertinents (intensité ambiante, force spéculaire, brillance) pour chaque modèle, offrant une expérience d'apprentissage complète.
                    </Card.Text>
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
                        "Programmation graphique avec OpenGL moderne",
                        "Développement de shaders GLSL",
                        "Implémentation d'algorithmes d'éclairage 3D",
                        "Manipulation de matrices et transformations 3D"
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
                        "Développement d'interfaces utilisateur avec ImGui",
                        "Conception d'architecture logicielle modulaire",
                        "Chargement et manipulation de modèles 3D",
                        "Optimisation des performances de rendu"
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
            <Col md={6} className="text-center">
              <a href="https://github.com/Fabien83560/opengl-demonstrator" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" style={{ width: '100%', margin: '5px' }}>
                  <BsGithub /> &nbsp;
                  {"Voir sur GitHub"}
                </Button>
              </a>
            </Col>
          </Row>
        </Card>

      </Container>
    </Container>
  );
}

export default DemonstrateurOpengl;