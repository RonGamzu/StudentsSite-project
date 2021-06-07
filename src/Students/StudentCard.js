import { Card } from "react-bootstrap";

function StudentCard(props) {
  return (
    <div>
      <Card
        style={{
          width: "400px",
          fontSize: "30px",
          boxShadow: "10px 10px 5px grey",
        }}
      >
        <Card.Header className="text-center mb-2">Student Details</Card.Header>
        <div className="d-flex align-items-center">
          <Card.Img
            style={{
              margin: "auto",
              width: "50%",
              border: "5px solid #e1e1e1",
              borderRadius: "50%",
            }}
            variant="top"
            src={`https://randomuser.me/api/portraits/men/${props.studentNumber}.jpg`}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <hr/>
          <Card.Text style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Email:</span> {props.email}
            <br />
            <span style={{ fontWeight: "bold" }}>Address:</span> {props.address}
            <br />
            <span style={{ fontWeight: "bold" }}>Course:</span> {props.course}
            <br />
            <span style={{ fontWeight: "bold" }}>Gender:</span> {props.gender}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StudentCard;
