import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">Ortega Fabien</b>, un passionné d'informatique avec une solide formation. 
                Je suis actuellement en troisième année de <b className="purple">BUT Informatique</b> (2025), ce qui m'a permis d'acquérir 
                des compétences approfondies en <b className="purple">développement logiciel</b>, <b className="purple">administration des systèmes</b>, 
                et <b className="purple">gestion de bases de données</b>.

              <br />
              <br />

              Depuis mon plus jeune âge, j'ai toujours été fasciné par les <b className="purple">technologies</b> et leur potentiel à <b className="purple">transformer notre monde</b>. 
              Cette passion m'a conduit à m'engager dans diverses projets, tant académiques que personnels, 
              où j'ai pu mettre en pratique mes compétences <b className="purple">techniques</b> et <b className="purple">collaboratives</b>.

              <br />
              <br />

              En plus de mes compétences techniques, je suis également très intéressé par <b className="purple">l'innovation</b> et <b className="purple">l'amélioration continue</b>. 
              Je crois fermement que <b className="purple">l'apprentissage ne s'arrête jamais</b>, c'est pourquoi je suis constamment à la recherche 
              de <b className="purple">nouvelles connaissances</b> et de <b className="purple">perfectionnement</b> de mes compétences.

              <br />
              <br />

              Je suis particulièrement motivé par les défis qui nécessitent des solutions <b className="purple">créatives</b> et <b className="purple">efficaces</b>. 
              Que ce soit en travaillant sur des <b className="purple">applications web</b>, en <b className="purple">optimisant des systèmes existants</b>, 
              ou en <b className="purple">explorant de nouvelles technologies</b>, je m'efforce toujours d'apporter une valeur ajoutée à 
              chaque projet sur lequel je travaille.

              <br />
              <br />

              Mon objectif professionnel est de continuer à évoluer dans le domaine de l'informatique, 
              en contribuant à des projets <b className="purple">innovants</b> et en <b className="purple">collaborant avec des équipes dynamiques et passionnées</b>. 
              Je suis toujours ouvert à de nouvelles <b className="purple">opportunités</b> et <b className="purple">collaborations</b>, 
              alors n'hésitez pas à me contacter si vous souhaitez en savoir plus sur mon parcours ou <b className="purple">discuter de potentiels projets</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h4>
              N'HÉSITEZ PAS À VOUS <span className="purple">CONNECTER </span>AVEC MOI
            </h4>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fabien83560"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fabien-ortega-6bb720272/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:pro.fabienortega@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
