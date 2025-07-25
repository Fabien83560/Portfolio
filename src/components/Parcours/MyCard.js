import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function MyCard(props) {
  const formattedDescription = props.description
    .split('\n')
    .map((line) => `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}`)
    .join('<br />');

  return (
    <Card className="study-card-view">
      <Card.Body>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <Card.Title style={{
            fontWeight: 'bold',
            fontSize: '1.3rem',
            flex: '1 1 auto',
            minWidth: '200px'
          }}>
            {props.title}
          </Card.Title>
          <span className="period-highlight" style={{ color: "#32CD32", fontSize: '1rem' }}>
            {props.startDate} - {props.endDate}
          </span>
        </div>

        <Row className="mt-3">
          <Col xs={12} xl={4} className="mb-3 mb-xl-0 d-flex align-items-center">
            <Card.Img variant="top" src={props.imgPath} alt="study-img" style={{ width: '100%', height: 'auto' }} />
          </Col>
          <Col xs={12} xl={8}>
            <Card.Text style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {props.schoolName}
            </Card.Text>
            <Card.Text style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          </Col>
        </Row>

        {props.extraContent && <div className="mt-3">{props.extraContent}</div>}
      </Card.Body>
    </Card>
  );
}

export default MyCard;
