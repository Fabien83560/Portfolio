import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/polygon.png";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaServer, FaAlgorithm } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { AiFillExperiment } from "react-icons/ai";

function ColorPointPolygon() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              <strong className="purple">Coloration de Points dans un Polygone</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Color Point Polygon" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  Ce programme algorithmique détermine la position de points par rapport à un polygone en les classifiant comme étant à l'intérieur, à l'extérieur ou sur les bords du polygone. 
                  Développé en Python, ce projet met l'accent sur l'optimisation du temps d'exécution tout en maintenant une précision maximale. 
                  Les résultats sont visualisés dans un fichier SVG où les points sont colorés en vert (intérieur), rouge (extérieur) ou jaune (sur le bord), offrant une représentation claire et intuitive des calculs effectués.
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
                    { name: "Python", xs: 6, md: 3 },
                    { name: "ElementTree XML", xs: 6, md: 3 },
                    { name: "Algorithmes géométriques", xs: 6, md: 3 },
                    { name: "SVG", xs: 6, md: 3 }
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
                  La détermination de l'emplacement d'un point par rapport à un polygone est un problème fondamental en géométrie algorithmique avec de nombreuses applications pratiques dans les SIG, les jeux vidéo et la modélisation. 
                  Cependant, cette tâche devient rapidement complexe avec des formes irrégulières et de nombreux points à tester. 
                  Les algorithmes naïfs peuvent conduire à des temps d'exécution prohibitifs, en particulier pour les polygones complexes avec de nombreux sommets ou lorsque des milliers de points doivent être évalués.
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
                  J'ai implémenté un algorithme de ray-casting optimisé qui détermine si un point est à l'intérieur, à l'extérieur ou sur le bord d'un polygone. 
                  L'algorithme trace un rayon horizontal depuis chaque point et compte les intersections avec les bords du polygone. 
                  Un nombre impair d'intersections indique que le point est à l'intérieur, tandis qu'un nombre pair indique qu'il est à l'extérieur. 
                  Des vérifications spéciales détectent si le point se trouve exactement sur un bord. 
                  Les performances sont optimisées par des calculs géométriques efficaces et l'évitement de calculs redondants.
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
                    "Classification précise des points (intérieur, extérieur, bord)",
                    "Visualisation des résultats via fichier SVG coloré",
                    "Gestion des cas particuliers (points sur les sommets ou arêtes)",
                    "Traitement efficace des formes complexes",
                    "Performances optimisées pour de grands ensembles de données",
                    "Rapports détaillés sur les temps d'exécution",
                    "Documentation claire du code et des algorithmes"
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
                      Aspects techniques
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Implémentation de l'algorithme de ray-casting",
                    "Calcul d'orientation pour déterminer les intersections",
                    "Détection précise des points situés exactement sur les bords",
                    "Manipulation de fichiers SVG avec ElementTree",
                    "Gestion efficace de la mémoire pour les grands ensembles de données",
                    "Mesure précise des performances d'exécution",
                    "Validation des résultats via visualisation graphique"
                  ].map((item, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center align-items-center me-2" style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                          <SiPython className="purple" size={12} />
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
                      <AiFillExperiment className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Implémentation de l'algorithme
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      L'algorithme principal repose sur deux fonctions clés : <code>orientation()</code> et <code>intersect()</code>. La fonction <code>orientation()</code> calcule l'orientation de trois points dans l'espace 2D, permettant de déterminer si les points tournent dans le sens horaire ou antihoraire. Cette information est cruciale pour la fonction <code>intersect()</code>, qui vérifie si deux segments de ligne se croisent.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Pour déterminer si un point est à l'intérieur d'un polygone, la fonction <code>isInsidePolygon()</code> trace un rayon horizontal depuis le point vers l'infini (en pratique, jusqu'à la valeur maximale de x trouvée dans le polygone). Ensuite, elle compte le nombre de fois où ce rayon croise les bords du polygone. Selon la théorie du ray-casting, si le nombre d'intersections est impair, le point est à l'intérieur du polygone ; s'il est pair, le point est à l'extérieur.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Une attention particulière est portée aux cas limites, comme les points situés exactement sur un bord du polygone ou les rayons passant par un sommet. Ces situations spéciales sont traitées avec des vérifications supplémentaires pour garantir une classification précise.
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
                        "Conception et optimisation d'algorithmes géométriques",
                        "Programmation Python efficace et élégante",
                        "Manipulation de fichiers XML/SVG",
                        "Analyse et amélioration des performances"
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
                        "Résolution de problèmes mathématiques complexes",
                        "Visualisation de données algorithmiques",
                        "Documentation technique claire et accessible",
                        "Gestion de cas particuliers et d'exceptions"
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

        <Card className="study-card-view mb-5">
          <Card.Body>
            <Row>
              <Col xs={12} md={1} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
                <div className="d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.2)" }}>
                  <FaChartLine className="purple" size={25} />
                </div>
              </Col>
              <Col xs={12} md={11}>
                <Card.Title className="purple fs-4 mb-3">
                  Résultats et performances
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Le programme affiche d'excellentes performances même avec des ensembles de données volumineux. Pour le test sur la carte d'Italie comprenant plus de 500 points à vérifier par rapport à un polygone complexe, le temps d'exécution reste inférieur à une seconde sur un matériel standard.
                </Card.Text>
                <Row className="text-center mt-4">
                  <Col md={4} className="mb-3">
                    <div className="p-3 rounded" style={{ backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                      <h3 className="purple">Points intérieurs</h3>
                      <p className="fs-4 text-white">~40%</p>
                      <p className="text-white">(représentés en vert)</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3 rounded" style={{ backgroundColor: "rgba(113, 74, 186, 0.15)" }}>
                      <h3 className="purple">Points extérieurs</h3>
                      <p className="fs-4 text-white">~55%</p>
                      <p className="text-white">(représentés en rouge)</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3 rounded" style={{ backgroundColor: "rgba(143, 84, 176, 0.15)" }}>
                      <h3 className="purple">Points sur les bords</h3>
                      <p className="fs-4 text-white">~5%</p>
                      <p className="text-white">(représentés en jaune)</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={6} className="text-center">
              <a href="https://github.com/Fabien83560/color-points-inside-polygon" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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

export default ColorPointPolygon;