import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eventbattles from "../../Assets/Projects/eventbattles.png";
import counterpro from "../../Assets/Projects/counterpro.png";
import outilpresentation from "../../Assets/Projects/outil-presentation.png";
import outilcalibration from "../../Assets/Projects/outil-calibration.png";
import opengl from "../../Assets/Projects/opengl.png";
import hypixel from "../../Assets/Projects/hypixel.png";
import polygon from "../../Assets/Projects/polygon.png";
import petitprince from "../../Assets/Projects/petit-prince.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">Réalisés </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outilpresentation}
              isBlog={false}
              title="Outil de Présentation"
              description="Ce projet est un outil de visualisation de diapositives, développé en React. Il met à disposition une bibliothèque de composants prédéfinis, permettant d'agencer des diaporamas à votre guise."
              ghLink="https://github.com/Fabien83560/react-slides"
              demoLink="https://slides.ortegaf.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outilcalibration}
              isBlog={false}
              title="Outil de Calibration des Caméras Infrarouge"
              description="Lors d'un stage de 2ème année de BUT Informatique que j'ai eu la chance d'effectué à l'IRFM du CEA Cadarache. J'ai réalisé un outil qui automatise tout le processus de création de calibration des caméras infrarouge du Tokamak WEST."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counterpro}
              isBlog={false}
              title="CounterPro"
              description="CounterPro est un bot Discord qui permet aux modérateur des différents serveurs Discord de ne plus avoir besoin de modérer les channels textuels pour compter de 1 en 1, permettant un gain de temps conséquent."
              ghLink="https://github.com/Fabien83560/CounterPro"
              demoLink="https://counterpro.ortegaf.fr/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventbattles}
              isBlog={false}
              title="EventBattles"
              description="EventBattles est le projet que j'ai effectué lors de ma 3ème année de BUT Informatique. Il permet de faciliter la gestion, la participations et le suivi de tournois orienté jeux-vidéos."
              demoLink="https://eventbattles.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opengl}
              isBlog={false}
              title="Démonstrateur OpenGL"
              description="Ce projet étudiant a pour but de démontrer certaines fonctionnalités essentielles d'OpenGL, à travers l'affichage de différents objets et la modification de leurs paramètres afin d'altérer leur rendu."
              ghLink="https://github.com/Fabien83560/opengl-demonstrator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hypixel}
              isBlog={false}
              title="Statistiques Hypixel"
              description="Cette application de statistiques pour le Skyblock d'Hypixel, un serveur Minecraft, a été réalisée en collaboration. Elle permet d'accéder en temps réel à l'ensemble des statistiques d'un joueur via une API."
              ghLink="https://github.com/Fabien83560/Stat_Hypixel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polygon}
              isBlog={false}
              title="Coloration de points dans un Polygone"
              description="Ce programme algorithmique permet de déterminer si des points se situent à l'intérieur, à l'extérieur ou sur les bords d'un polygone. Son objectif est d'optimiser au maximum le temps d'exécution."
              ghLink="https://github.com/Fabien83560/color-points-inside-polygon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petitprince}
              isBlog={false}
              title="Le Petit Prince"
              description="Cette application mobile, réalisée avec Ionic, a pour objectif de mettre en relation les parents d'élèves et l'école, afin de leur fournir toutes les informations relatives à la scolarité de leurs enfants."
              ghLink="https://github.com/Fabien83560/le-petit-prince"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
