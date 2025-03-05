import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../../Particle";
import projectImage from "../../../Assets/Projects/petit-prince.png";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaTools, FaChartLine, FaLightbulb, FaCogs, FaUserGraduate, FaRocket, FaCode, FaServer, FaMobile } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { SiIonic, SiAngular, SiTypescript } from "react-icons/si";

function PetitPrince() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            <h1 className="project-heading">
              <strong className="purple">Le Petit Prince</strong>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <Image src={projectImage} alt="Le Petit Prince" fluid className="rounded shadow" style={{ maxHeight: "500px", objectFit: "contain" }} />
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
                  L'application mobile "Le Petit Prince" a été développée avec Ionic et Angular pour faciliter la communication entre l'école primaire du même nom et les parents d'élèves. Cette solution numérique offre un accès centralisé aux informations scolaires importantes, aux événements à venir, aux galeries de photos des activités, et aux coordonnées de l'établissement. Conçue pour être intuitive et accessible, l'application améliore significativement l'expérience utilisateur par rapport aux méthodes de communication traditionnelles, tout en garantissant la sécurité des données par un système d'authentification robuste.
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
                    { name: "Ionic", xs: 6, md: 2 },
                    { name: "Angular", xs: 6, md: 2 },
                    { name: "TypeScript", xs: 6, md: 2 },
                    { name: "Capacitor", xs: 6, md: 2 },
                    { name: "REST API", xs: 6, md: 2 },
                    { name: "HTML/CSS", xs: 6, md: 2 }
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
                  Les écoles primaires rencontrent souvent des difficultés dans leur communication avec les parents d'élèves. Les méthodes traditionnelles comme les notes papier peuvent être facilement perdues, tandis que les emails sont souvent ignorés parmi de nombreux autres messages. De plus, les parents n'ont pas toujours accès en temps réel aux informations importantes comme les dates des événements scolaires, les changements d'horaires, ou les galeries de photos des activités de classe. Cette situation peut créer des malentendus, une déconnexion entre l'école et les familles, et finalement impacter négativement l'expérience éducative des enfants.
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
                  L'application "Le Petit Prince" répond à ces défis en offrant une plateforme mobile unifiée qui centralise toutes les communications entre l'école et les parents. Développée avec Ionic et Angular, elle propose une interface utilisateur intuitive organisée en onglets thématiques pour un accès rapide aux informations. L'application permet aux parents de consulter les articles importants, visualiser les galeries de photos des activités scolaires, accéder à un calendrier des événements à venir, et retrouver facilement les coordonnées de l'école. Un système de favoris permet de marquer les articles importants pour y revenir ultérieurement. La sécurité est assurée par une authentification robuste, et la persistance des données garantit l'accès même en cas de connectivité limitée.
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
                    "Système d'authentification sécurisé",
                    "Affichage des articles de l'école avec possibilité de recherche",
                    "Système de marquage d'articles en favoris",
                    "Consultation des galeries photos des activités scolaires",
                    "Calendrier des événements à venir",
                    "Coordonnées complètes de l'établissement",
                    "Tutoriel intégré pour les nouveaux utilisateurs",
                    "Stockage local des données pour utilisation hors ligne",
                    "Système de rafraîchissement des données (pull-to-refresh)",
                    "Interface adaptée aux différentes tailles d'écrans"
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
                    "Architecture Angular standalone avec Ionic UI components",
                    "Système de stockage local avec Capacitor Preferences",
                    "Communication avec API REST externe pour récupération des données",
                    "Gestion d'état avec services Angular partagés",
                    "Interface utilisateur basée sur les composants Ionic",
                    "Utilisation des Standalone Components d'Angular",
                    "Gestion des transitions et animations fluides",
                    "Système de cache intelligent pour optimiser les performances",
                    "Responsive design avec adaptation aux différents appareils",
                    "Architecture en onglets pour une navigation intuitive"
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
                      <FaMobile className="purple" size={25} />
                    </div>
                  </Col>
                  <Col xs={12} md={11}>
                    <Card.Title className="purple fs-4 mb-3">
                      Expérience utilisateur
                    </Card.Title>
                    <Card.Text style={{ color: "white", textAlign: "justify" }}>
                      L'expérience utilisateur a été au centre de la conception de l'application "Le Petit Prince". L'interface est organisée en cinq onglets principaux, accessibles depuis une barre de navigation en bas de l'écran, permettant aux parents de naviguer intuitivement entre les différentes fonctionnalités :
                    </Card.Text>
                    <Row className="mt-4">
                      <Col md={6}>
                        <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                          <li className="mb-3">
                            <div className="d-flex align-items-start">
                              <div className="d-flex justify-content-center align-items-center me-2 mt-1" style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                <SiIonic className="purple" size={12} />
                              </div>
                              <div>
                                <strong>Articles</strong> - Affiche tous les articles publiés par l'école, avec possibilité de recherche et de marquer des favoris. Chaque article peut être ouvert pour une lecture détaillée et peut contenir des images.
                              </div>
                            </div>
                          </li>
                          <li className="mb-3">
                            <div className="d-flex align-items-start">
                              <div className="d-flex justify-content-center align-items-center me-2 mt-1" style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                <SiIonic className="purple" size={12} />
                              </div>
                              <div>
                                <strong>Galeries</strong> - Présente les collections de photos des activités scolaires, permettant aux parents de suivre visuellement les expériences de leurs enfants à l'école.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul style={{ color: "white", listStyleType: "none", padding: 0 }}>
                          <li className="mb-3">
                            <div className="d-flex align-items-start">
                              <div className="d-flex justify-content-center align-items-center me-2 mt-1" style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                <SiIonic className="purple" size={12} />
                              </div>
                              <div>
                                <strong>Accueil</strong> - Page principale qui affiche les articles favoris et propose un tutoriel pour les nouveaux utilisateurs. C'est aussi ici que se trouve l'écran de connexion.
                              </div>
                            </div>
                          </li>
                          <li className="mb-3">
                            <div className="d-flex align-items-start">
                              <div className="d-flex justify-content-center align-items-center me-2 mt-1" style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                <SiIonic className="purple" size={12} />
                              </div>
                              <div>
                                <strong>Dates</strong> - Calendrier des événements importants à venir comme les sorties scolaires, réunions parents-professeurs ou jours fériés.
                              </div>
                            </div>
                          </li>
                          <li className="mb-3">
                            <div className="d-flex align-items-start">
                              <div className="d-flex justify-content-center align-items-center me-2 mt-1" style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(83, 164, 240, 0.15)" }}>
                                <SiIonic className="purple" size={12} />
                              </div>
                              <div>
                                <strong>Contact</strong> - Regroupe toutes les coordonnées de l'école (adresse, téléphone, email) avec des icônes intuitives.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Card.Text style={{ color: "white", textAlign: "justify", marginTop: "20px" }}>
                      L'application utilise un arrière-plan subtil avec le personnage du "Petit Prince" pour renforcer l'identité visuelle de l'école. Les données sont chargées de manière fluide et peuvent être rafraîchies avec un simple geste de glissement vers le bas (pull-to-refresh), offrant une expérience moderne et réactive aux utilisateurs.
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
                        "Développement d'applications mobiles avec Ionic/Angular",
                        "Conception d'interfaces utilisateur intuitives et responsives",
                        "Gestion de l'authentification et de la sécurité",
                        "Persistance des données avec Capacitor Preferences"
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
                        "Communication avec des API REST externes",
                        "Optimisation des performances pour appareils mobiles",
                        "Conception adaptée aux besoins des utilisateurs finaux",
                        "Développement d'architectures scalables et maintenables"
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
              <a href="https://github.com/Fabien83560/le-petit-prince" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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

export default PetitPrince;