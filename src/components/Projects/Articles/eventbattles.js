import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/eventbattles.png";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaServer, FaGitlab, FaDocker } from "react-icons/fa";
import { SiReact, SiPython, SiFastapi, SiPostgresql, SiTailwindcss } from "react-icons/si";

function Eventbattles() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              <strong className="purple">EventBattles</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="EventBattles" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  EventBattles est une plateforme dédiée à la communauté des jeux vidéo, permettant la création et la participation à des tournois personnalisés. 
                  Ce projet a été développé dans le cadre de ma troisième année de BUT Informatique comme projet complet avec CI/CD et déploiement automatisé. 
                  Les utilisateurs peuvent créer leurs propres événements, définir des règles spécifiques, fixer le nombre de participants, et ajuster d'autres paramètres.
                  La plateforme offre une expérience complète avec gestion des inscriptions, suivi des statistiques personnelles, et un aspect communautaire enrichissant.
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
                    { name: "React.js", xs: 6, md: 2 },
                    { name: "Tailwind CSS", xs: 6, md: 2 },
                    { name: "FastAPI", xs: 6, md: 2 },
                    { name: "PostgreSQL", xs: 6, md: 2 },
                    { name: "Docker", xs: 6, md: 2 },
                    { name: "GitLab CI/CD", xs: 6, md: 2 }
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
                  L'organisation de tournois de jeux vidéo reste souvent un processus complexe et fragmenté, nécessitant l'utilisation de multiples outils externes (gestion des inscriptions, communication, suivi des performances). 
                  Les joueurs et organisateurs recherchent une solution centralisée qui simplifie l'ensemble du processus, de la création à la participation, en passant par le suivi des statistiques.
                  De plus, les plateformes existantes offrent rarement une expérience personnalisable qui s'adapte aux spécificités des différents jeux et formats de compétition.
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
                  EventBattles offre une architecture moderne et modulaire, construite autour d'une API RESTful en FastAPI, une interface utilisateur réactive en React et Tailwind CSS, et une base de données PostgreSQL robuste.
                  La plateforme propose une expérience utilisateur intuitive permettant la création, la gestion et la participation aux tournois, avec des fonctionnalités de classement, de statistiques personnelles et de récompenses.
                  L'ensemble est déployé via une infrastructure conteneurisée avec Docker et un pipeline CI/CD complet qui automatise les tests, la construction et le déploiement des versions de développement et de production.
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
                    "Création de tournois personnalisés avec définition des règles",
                    "Système de gestion des inscriptions avec dates limites",
                    "Attribution et suivi de récompenses pour les participants",
                    "Tableaux de classement et statistiques détaillées",
                    "Système de modération des tournois",
                    "Intégration des réseaux sociaux pour le partage",
                    "Recherche avancée de tournois",
                    "Interface utilisateur réactive et intuitive",
                    "Système d'authentification sécurisé",
                    "Tableaux de bord personnalisés pour les utilisateurs"
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
                      Architecture technique
                    </Card.Title>
                  </Col>
                </Row>
                <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                  {[
                    "Architecture microservices avec Docker et docker-compose",
                    "API backend en FastAPI avec documentation automatisée",
                    "Interface utilisateur en React.js et Tailwind CSS",
                    "Base de données PostgreSQL avec pgAdmin pour la gestion",
                    "Tests automatisés à plusieurs niveaux (unitaires, API, intégration)",
                    "Pipeline CI/CD GitLab pour l'intégration et le déploiement continus",
                    "Environnements de développement et production distincts",
                    "Système de versionnement sémantique pour les releases",
                    "Sécurité renforcée avec vérification des tokens d'API",
                    "Monitoring et logging des applications déployées"
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
                      <FaGitlab className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Pipeline CI/CD
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Une des caractéristiques principales de ce projet est son pipeline d'intégration et de déploiement continus complet, implémenté avec GitLab CI/CD. Ce pipeline automatise l'ensemble du processus de développement, de test et de déploiement, garantissant la qualité et la stabilité du code à chaque étape.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Le workflow CI/CD est divisé en plusieurs étapes clés : construction des images Docker pour chaque service (API, frontend, base de données), exécution des tests automatisés pour valider les fonctionnalités, et déploiement automatique vers les environnements de développement ou de production selon la branche Git concernée. Le pipeline inclut également des vérifications post-déploiement qui s'assurent que tous les services sont correctement opérationnels.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Ce système permet une livraison continue et fiable de nouvelles fonctionnalités, tout en maintenant un haut niveau de qualité grâce aux tests automatisés qui vérifient chaque aspect de l'application avant toute mise en production. L'utilisation des variables d'environnement sécurisées de GitLab garantit également que les informations sensibles (tokens, mots de passe) restent protégées tout au long du processus.
                    </Card.Text>
                  </Col>
                </Row>
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
                      <FaDocker className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Architecture conteneurisée
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      EventBattles utilise une architecture moderne entièrement conteneurisée avec Docker, facilitant le déploiement cohérent et la scalabilité de l'application. Chaque composant du système est isolé dans son propre conteneur, ce qui permet une gestion granulaire des ressources et une maintenance simplifiée.
                    </Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      L'architecture se compose de plusieurs services distincts orchestrés via Docker Compose :
                    </Card.Text>
                    <div className="mt-4 space-y-3">
                      {[
                        { name: "API", description: "Un service FastAPI qui expose les endpoints RESTful pour toutes les fonctionnalités" },
                        { name: "Frontend", description: "Une application React.js qui fournit l'interface utilisateur" },
                        { name: "Base de données", description: "Une instance PostgreSQL pour le stockage persistant des données" },
                        { name: "PgAdmin", description: "Une interface de gestion pour la base de données" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start mb-2">
                          <div>
                            <span style={{ color: "white" }}>
                              <strong className="purple">{item.name}</strong> : {item.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      Cette architecture modulaire permet de mettre à jour ou de remplacer individuellement chaque composant sans affecter le reste du système. Elle facilite également le déploiement sur différents environnements (développement, production) avec une configuration spécifique à chacun, tout en garantissant un comportement identique grâce à la standardisation des conteneurs.
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
                        "Développement frontend avec React et Tailwind CSS",
                        "Conception et implémentation d'API RESTful",
                        "Gestion de base de données PostgreSQL",
                        "Architecture microservices avec Docker"
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
                        "Configuration et optimisation de pipelines CI/CD",
                        "Gestion de projet avec GitLab",
                        "Tests automatisés à plusieurs niveaux",
                        "Déploiement continu en environnement de production"
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
              <a href="https://eventbattles.fr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" style={{ width: '100%', margin: '5px' }}>
                  <CgWebsite /> &nbsp;
                  {"Visiter le site"}
                </Button>
              </a>
            </Col>
          </Row>
        </Card>

      </Container>
    </Container>
  );
}

export default Eventbattles;