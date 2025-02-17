import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import StudyCard from "./StudyCard";
import iutArles from "../../Assets/Parcours/iutArles.png";
import lyceeJeanLurcat from "../../Assets/Parcours/lyceeJeanLurcat.png"

function Parcours() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
            Études <strong className="purple">Réalisés </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ci-dessous, voici mon parcours Scolaire
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={32} className="study-card">
                <StudyCard
                    title="BUT Informatique"
                    schoolName="IUT Aix-Marseille Site d'Arles"
                    description={"Après l’obtention de mon baccalauréat STI2D, j’ai choisi d’intégrer le BUT Informatique à l’IUT d’Aix-Marseille – Site d’Arles, avec la spécialité « Réalisation d’applications : conception, développement, validation ». Ce choix s’est imposé naturellement, car j’ai toujours été attiré par l’univers du numérique, le développement de solutions techniques et la création d’applications. Ce cursus m’a attiré par son approche concrète, alliant théorie et pratique, et son orientation vers la professionnalisation, notamment grâce aux nombreux projets, stage et notamment une alternance en entreprise.\n \n Tout au long de cette formation, j’ai acquis des compétences variées dans le domaine du développement d’applications, aussi bien sur les aspects front-end que back-end. J’ai appris à concevoir des solutions logicielles en prenant en compte les besoins des utilisateurs, à développer des applications robustes et ergonomiques, et à assurer leur validation ainsi que leur déploiement. Cette spécialisation m’a permis de me familiariser avec l’ensemble des étapes du cycle de vie d’un projet informatique, en adoptant une approche globale qui couvre la conception, le développement, les tests et la maintenance. \n \n Au-delà des compétences techniques, cette formation m’a également permis de développer des capacités de travail en équipe, d’organisation et de gestion de projets, essentielles dans le métier de développeur. Ces trois années m’ont conforté dans mon envie d’évoluer dans le domaine du développement d’applications et de continuer à approfondir mes connaissances sur les technologies actuelles."}
                    startDate="2022"
                    endDate="2025"
                    imgPath={iutArles}
                />
            </Col>
            <Col md={32} className="study-card">
                <StudyCard
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
    </Container>
  );
}

export default Parcours;
