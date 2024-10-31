import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function LandingPage() {
  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col
            md={8}
            className="text-center bg-light p-5 mb-4 rounded-3 shadow-lg"
          >
            <h1 className="display-4">Welcome to EvalChain</h1>
            <p className="lead">
              A Decentralized Evaluation and Verification Platform.
            </p>
            <Button variant="primary" size="lg" href="/auth">
              Get Started
            </Button>
          </Col>
        </Row>

        <h2 className="text-center mt-5 mb-4">Key Features</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>Decentralization</Card.Title>
                <Card.Text>
                  Ensure trust and transparency through a decentralized
                  evaluation process.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>Verification</Card.Title>
                <Card.Text>
                  Our platform provides robust mechanisms to verify evaluation
                  results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>User-Friendly Interface</Card.Title>
                <Card.Text>
                  Experience a seamless and intuitive user interface designed
                  for everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="text-center mt-5 mb-4">What Our Users Say</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "EvalChain has revolutionized the way we evaluate performance.
                  The transparency is incredible!" - User A
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text>
                  "I love the user interface of EvalChain! It's so easy to
                  navigate." - User B
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Button variant="primary" size="lg" href="/auth">
              Join Us Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
