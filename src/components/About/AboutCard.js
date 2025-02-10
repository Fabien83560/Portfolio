import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, Je suis <span className="purple">Fabien ORTEGA </span>
            <br />
            Je suis aujourd'hui en 3ème année de <span className="purple">BUT Informatique</span>, alternant à <span className="purple">l'IRFM du CEA Cadarache</span>, j'ai pu aquérir de nombreuses compétences dans le <span className="purple">développement logiciel</span>.
            <br />
            <br />
            En dehors du développement, voici d'autres activités que j'adore faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer au jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sport
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
