import React from "react";
import { Container, Card, Row, Col, Button, ListGroup } from "react-bootstrap";

function Profile() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">User Profile</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title className="text-center">Username</Card.Title>
              <Card.Text className="text-center text-muted">
                Member since: January 2023
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Email:</strong> user@example.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Occupation:</strong> Software Developer
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Bio:</strong> Passionate about building user-centric
                  applications and exploring new technologies.
                </ListGroup.Item>
              </ListGroup>
              <div className="text-center mt-4">
                <Button variant="primary" className="me-2">
                  Edit Profile
                </Button>
                <Button variant="secondary">Logout</Button>
              </div>
            </Card.Body>
          </Card>

          <h4 className="text-center mt-5 mb-4">Recent Activities</h4>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Text className="text-muted">
                Here are your recent activities:
              </Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  Completed Quiz: <strong>JavaScript Basics</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Participated in Event: <strong>Coding Challenge</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Joined Community: <strong>Web Developers</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
