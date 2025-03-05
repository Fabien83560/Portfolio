import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/hypixel.webp";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaServer, FaDatabase } from "react-icons/fa";

function StatistiquesHypixel() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              <strong className="purple">Statistiques Hypixel</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Statistiques Hypixel" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  Cette application, développée en Java, permet d'accéder et d'analyser les statistiques des joueurs sur le serveur Minecraft Hypixel. Réalisée en collaboration, elle offre une interface ergonomique pour visualiser les performances des joueurs dans différents modes de jeu (BedWars, SkyWars, SkyBlock), gérer une liste d'amis, et comparer les statistiques de deux joueurs simultanément. L'application exploite l'API officielle d'Hypixel pour récupérer les données en temps réel, les présente de manière claire et organisée, et permet aux utilisateurs de suivre l'évolution des performances de leurs amis.
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
                    { name: "Java", xs: 6, md: 2 },
                    { name: "Swing", xs: 6, md: 2 },
                    { name: "MySQL", xs: 6, md: 2 },
                    { name: "JSON", xs: 6, md: 2 },
                    { name: "JFormDesigner", xs: 6, md: 2 },
                    { name: "Maven", xs: 6, md: 2 }
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
                  Hypixel offre une multitude de statistiques pour chaque joueur, réparties sur différents modes de jeu, mais ces données sont difficilement accessibles et visualisables directement depuis le jeu. Les joueurs souhaitent pouvoir consulter facilement leurs performances, suivre l'évolution de leur progression, et comparer leurs statistiques avec celles de leurs amis. Bien que l'API d'Hypixel rende ces données disponibles, il manquait une interface utilisateur conviviale permettant aux joueurs de les explorer de manière intuitive et organisée.
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
                  Notre application offre une interface graphique complète développée avec Java Swing, permettant aux joueurs de rechercher n'importe quel utilisateur d'Hypixel et d'afficher ses statistiques détaillées pour plusieurs modes de jeu. Nous avons implémenté un système de liste d'amis persistante en utilisant une base de données MySQL, ainsi qu'une fonctionnalité de comparaison des statistiques entre deux joueurs. L'interface est intuitive, avec des tableaux clairs pour présenter les données, des calculs automatiques de ratios, et une navigation fluide entre les différents modes de jeu.
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
                    "Recherche de joueurs par nom d'utilisateur",
                    "Affichage des statistiques globales",
                    "Visualisation des statistiques pour BedWars, SkyWars et SkyBlock",
                    "Système de liste d'amis avec sauvegarde en base de données",
                    "Indication du statut en ligne/hors ligne des amis",
                    "Mode de comparaison de statistiques entre deux joueurs",
                    "Calculs automatiques de ratios (kills/deaths, wins/losses)",
                    "Interface adaptée à chaque mode de jeu",
                    "Support complet des différents profils SkyBlock",
                    "Affichage de la photo du skin du joueur"
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
                    "Architecture MVC (Modèle-Vue-Contrôleur) complète",
                    "Implémentation de classes dédiées pour chaque mode de jeu",
                    "Système de gestion de l'API avec validation des clés",
                    "Base de données MySQL pour la persistance des données",
                    "Organisation modulaire des composants d'interface",
                    "Système de cache pour optimiser les requêtes API",
                    "Gestion des erreurs et des exceptions API détaillée",
                    "Traitement asynchrone des requêtes pour une interface fluide",
                    "Structure orientée objet avec héritage pour les modes de jeu",
                    "Interface Swing avec composants personnalisés"
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
                      <FaDatabase className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Traitement des données
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      L'application traite un volume impressionnant de données provenant de l'API d'Hypixel, notamment pour le mode SkyBlock qui comprend des centaines de métriques différentes. Pour gérer cette complexité, nous avons implémenté un système de requêtes optimisé qui extrait et transforme les données JSON en objets Java structurés. Chaque mode de jeu possède ses propres classes spécifiques qui héritent d'une structure commune, permettant d'organiser les statistiques de manière cohérente.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Pour le mode SkyBlock en particulier, nous avons développé une gestion des profils multiples avec extraction de métriques détaillées pour chaque profil : compétences, donjons, pêche, exploitation minière, familiers, et bien d'autres. Les données sont présentées de manière hiérarchique avec un niveau de détail croissant à mesure que l'utilisateur navigue dans l'interface. Le système intègre également des calculs dérivés comme les ratios d'efficacité et les moyennes de compétences.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      La persistance des données est assurée par une base de données MySQL qui stocke les informations des joueurs ajoutés à la liste d'amis, permettant de retrouver rapidement leurs UUID pour les requêtes futures et d'afficher leur statut en temps réel. Cette architecture permet une expérience utilisateur fluide malgré les limitations de l'API en termes de fréquence de requêtes et de volume de données.
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
                        "Programmation Java orientée objet",
                        "Développement d'interfaces graphiques avec Swing",
                        "Consommation d'API REST et traitement JSON",
                        "Gestion de base de données relationnelle"
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
                        "Conception MVC et architecture logicielle",
                        "Traitement asynchrone en Java",
                        "Développement collaboratif et versioning",
                        "Documentation et JavaDoc"
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
              <a href="https://github.com/Fabien83560/Stat_Hypixel" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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

export default StatistiquesHypixel;