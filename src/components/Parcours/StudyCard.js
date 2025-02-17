import React from "react";
import Card from "react-bootstrap/Card";

function StudyCard(props) {
  const formattedDescription = props.description
    .split('\n')
    .map((line) => `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${line}`)
    .join('<br />');

  return (
    <Card className="study-card-view">
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          <Card.Title style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', fontSize: '1.5rem' }}>{props.title}</Card.Title>
          <span className="period-highlight" style={{ color: "#32CD32", marginLeft: 'auto' }}>
            {props.startDate} - {props.endDate}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <Card.Img variant="top" src={props.imgPath} alt="study-img" style={{ width: '35%', height: 'auto', marginRight: '15px' }} />
          <div style={{ flex: 1 }}>
            <Card.Text style={{ fontWeight: 'bold', marginBottom: '8px' }}>{props.schoolName}</Card.Text>
            <Card.Text style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudyCard;
