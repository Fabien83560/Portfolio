import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MyCard from "./MyCard";
import iutArles from "../../Assets/Parcours/iutArles.png";
import lyceeJeanLurcat from "../../Assets/Parcours/lyceeJeanLurcat.png";
import irfmCeaCadarache from "../../Assets/Parcours/irfmCeaCadarache.png";

function Parcours() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mon <strong className="purple">Parcours Scolaire</strong>
        </h1>
        <hr style={{ borderTop: '2px solid rgb(225, 128, 255)', width: '100px', margin: '10px auto' }} />
        <p style={{ color: "white" }}>
          Voici les formations qui m'ont permis de développer mes compétences dans le domaine de l’informatique et des technologies numériques.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={32} className="study-card">
                <MyCard
                    title="BUT Informatique"
                    schoolName="IUT Aix-Marseille Site d'Arles"
                    description={"Après l’obtention de mon baccalauréat STI2D, j’ai choisi d’intégrer le BUT Informatique à l’IUT d’Aix-Marseille – Site d’Arles, avec la spécialité « Réalisation d’applications : conception, développement, validation ». Ce choix s’est imposé naturellement, car j’ai toujours été attiré par l’univers du numérique, le développement de solutions techniques et la création d’applications. Ce cursus m’a attiré par son approche concrète, alliant théorie et pratique, et son orientation vers la professionnalisation, notamment grâce aux nombreux projets, stage et notamment une alternance en entreprise.\n \n Tout au long de cette formation, j’ai acquis des compétences variées dans le domaine du développement d’applications, aussi bien sur les aspects front-end que back-end. J’ai appris à concevoir des solutions logicielles en prenant en compte les besoins des utilisateurs, à développer des applications robustes et ergonomiques, et à assurer leur validation ainsi que leur déploiement. Cette spécialisation m’a permis de me familiariser avec l’ensemble des étapes du cycle de vie d’un projet informatique, en adoptant une approche globale qui couvre la conception, le développement, les tests et la maintenance. \n \n Au-delà des compétences techniques, cette formation m’a également permis de développer des capacités de travail en équipe, d’organisation et de gestion de projets, essentielles dans le métier de développeur. Ces trois années m’ont conforté dans mon envie d’évoluer dans le domaine du développement d’applications et de continuer à approfondir mes connaissances sur les technologies actuelles."}
                    startDate="2022"
                    endDate="2025"
                    imgPath={iutArles}
                />
            </Col>
            <Col md={32} className="study-card">
                <MyCard
                    title="Sciences et technologies de l'industrie et du développement durable (STI2D)"
                    schoolName="Lycée Jean Lurçat Martigues"
                    description={"Au lycée Jean Lurçat à Martigues, j’ai suivi la filière STI2D (Sciences et Technologies de l’Industrie et du Développement Durable), avec une spécialisation en Terminale dans l’option SIN (Systèmes d’Information et Numérique). J’ai choisi cette voie car j’étais attiré par l’univers des technologies, des systèmes informatiques et de la programmation. \n \n Cette formation m’a permis de développer des compétences dans l’étude et la conception de solutions numériques, en explorant des domaines comme les systèmes embarqués, la programmation, l’acquisition et le traitement des données. J’ai également été amené à comprendre le fonctionnement de composants électroniques et informatiques, et à travailler sur des projets concrets liant matériel et logiciel. \n \n L’approche technologique et appliquée de cette filière m’a donné le goût de l’informatique et de la création de solutions numériques. Ce parcours a confirmé mon envie de m’orienter vers le développement d’applications, ce qui m’a conduit à poursuivre mes études en BUT Informatique."}
                    startDate="2020"
                    endDate="2022"
                    imgPath={lyceeJeanLurcat}
                />
            </Col>
        </Row>
      </Container>
      <br/>
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Expériences Professionnelles</strong>
        </h1>
        <hr style={{ borderTop: '2px solid rgb(225, 128, 255)', width: '100px', margin: '10px auto' }} />
        <p style={{ color: "white" }}>
          Voici les différentes expériences professionnelles qui m'ont permis d'appliquer mes compétences techniques et de découvrir le monde de l'entreprise.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={32} className="study-card">
            <MyCard
              title="Développeur Full-Stack en Alternance"
              schoolName="IRFM du CEA Cadarache"
              description={"Au cours de mon alternance au sein de l’IRFM (Institut de Recherche sur la Fusion Magnétique) du CEA Cadarache, j’ai participé à la mise en place et à l’optimisation de l’utilisation d’IMAS, le standard de structuration et de gestion des données imposé dans le cadre du projet international ITER. Ce framework a pour objectif d’harmoniser l’enregistrement des données expérimentales issues des installations de fusion, afin d’en faciliter l’exploitation par l’ensemble de la communauté scientifique, notamment sur ITER. \n \n Avant mon arrivée, la structure mise en place au sein de mon groupe n’était pas adaptée aux besoins spécifiques des chercheurs, ce qui avait conduit à une quasi-absence d’enregistrement des données sur IMAS. J’ai donc repensé et redéfini cette structure afin que les données issues des recherches scientifiques, passées comme futures, soient correctement enregistrées et conformes aux standards exigés. \n \n Cette refonte a permis d’assurer la pérennité et la qualité des données produites par le groupe, tout en préparant l’intégration d’une automatisation : à terme, des scripts viendront compléter la chaîne de traitement des expériences sur WEST, afin que, suite à chaque choc plasma, les données soient automatiquement traitées puis enregistrées sur IMAS sans intervention manuelle. \n \n Cette mission m’a permis de développer des compétences en structuration et gestion de données scientifiques, en automatisation de traitements, ainsi qu’en compréhension des exigences liées à des projets d’envergure internationale tels qu’ITER."}
              startDate="2024"
              endDate="2025"
              imgPath={irfmCeaCadarache}
            />
          </Col>

          <Col md={32} className="study-card">
            <MyCard
              title="Développeur Full-Stack en Stage"
              schoolName="IRFM du CEA Cadarache"
              description={"Lors de mon stage au sein de l’IRFM (Institut de Recherche sur la Fusion Magnétique) du CEA Cadarache, j’ai eu l’opportunité de développer un plugin pour ThermaVIP, un logiciel interne utilisé pour la gestion du parc infrarouge du Tokamak WEST. \n \n Ce plugin a été conçu pour automatiser l’intégralité du processus de création des calibrations pour les différentes caméras infrarouges. Avant mon intervention, cette tâche était réalisée manuellement, ce qui représentait un travail long et fastidieux pour les équipes. Grâce à l’automatisation apportée par mon développement, l’efficacité du processus a été considérablement améliorée, réduisant ainsi les risques d’erreurs et optimisant le temps consacré à ces opérations critiques. \n \n Ce projet m’a permis d’approfondir mes compétences en développement logiciel dans un environnement scientifique exigeant, en combinant des aspects d’analyse des besoins utilisateurs, de programmation sur un logiciel existant, et d’intégration de solutions techniques adaptées aux contraintes spécifiques de l’instrumentation du Tokamak WEST."}
              startDate="avril 2024"
              endDate="juin 2024"
              imgPath={irfmCeaCadarache}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Parcours;
