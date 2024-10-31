import React from "react";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { FaClipboardList, FaCheckCircle, FaBell } from "react-icons/fa";

function HomePage() {
  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <h1 style={{ fontSize: "2rem", color: "#343a40" }}>
                Welcome Back!
              </h1>
              <p style={{ fontSize: "1.25rem", color: "#6c757d" }}>
                Here’s what you can do today:
              </p>
              <Button
                variant="primary"
                size="lg"
                style={{ padding: "10px 20px", fontSize: "1rem" }}
                href="/evaluations/new"
              >
                Start a New Evaluation
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="mb-4">
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Header className="bg-primary text-white">
              Current Evaluations
            </Card.Header>
            <Card.Body>
              <h2>5</h2>
              <Button variant="link" href="/evaluations/current">
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Header className="bg-success text-white">
              Pending Verifications
            </Card.Header>
            <Card.Body>
              <h2>3</h2>
              <Button variant="link" href="/verification/pending">
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Header className="bg-warning text-dark">
              New Notifications
            </Card.Header>
            <Card.Body>
              <h2>2</h2>
              <Button variant="link" href="/notifications">
                View All
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Header className="bg-primary text-white">
              <FaClipboardList className="mr-2" /> Your Evaluations
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Current Evaluations:</strong>{" "}
                <Button variant="link" href="/evaluations/current">
                  View
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Past Evaluations:</strong>{" "}
                <Button variant="link" href="/evaluations/past">
                  View
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Header className="bg-success text-white">
              <FaCheckCircle className="mr-2" /> Verification Tasks
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Pending Verifications:</strong>{" "}
                <Button variant="link" href="/verification/pending">
                  View
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Verified Credentials:</strong>{" "}
                <Button variant="link" href="/verification/verified">
                  View
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
