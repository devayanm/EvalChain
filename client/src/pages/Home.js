import React from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  ListGroup,
  ProgressBar,
  Badge,
} from "react-bootstrap";
import {
  FaClipboardList,
  FaCheckCircle,
  FaBell,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

function HomePage() {
  return (
    <Container className="mt-4" style={{ maxWidth: "1200px" }}>
      {/* Notification Badge in the header */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-end">
          <FaBell style={{ fontSize: "1.5rem", color: "#007bff" }} />
          <Badge pill variant="danger" style={{ marginLeft: "-10px" }}>
            2
          </Badge>
        </Col>
      </Row>

      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Card.Body style={{ padding: "2rem 1.5rem" }}>
              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  color: "#343a40",
                }}
              >
                Welcome Back!
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
                Let’s start achieving your goals:
              </p>
              <Button
                variant="primary"
                size="lg"
                style={{
                  padding: "0.6rem 1.5rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                }}
                href="/evaluations/new"
              >
                Start a New Evaluation
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions and Progress Tracking */}
      <Row className="mb-4">
        {[
          {
            title: "Current Evaluations",
            color: "bg-primary",
            textColor: "text-white",
            count: 5,
            link: "/evaluations/current",
          },
          {
            title: "Pending Verifications",
            color: "bg-success",
            textColor: "text-white",
            count: 3,
            link: "/verification/pending",
          },
          {
            title: "New Notifications",
            color: "bg-warning",
            textColor: "text-dark",
            count: 2,
            link: "/notifications",
          },
        ].map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card
              className="text-center"
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Card.Header
                className={`${item.color} ${item.textColor}`}
                style={{ fontSize: "1.2rem" }}
              >
                {item.title}
              </Card.Header>
              <Card.Body>
                <h2 style={{ fontSize: "2.5rem", margin: "0" }}>
                  {item.count}
                </h2>
                <Button
                  variant="link"
                  href={item.link}
                  style={{
                    color: item.color === "bg-warning" ? "#343a40" : "#007bff",
                  }}
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Task and Progress Panels */}
      <Row>
        <Col md={6} className="mb-4">
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Card.Header
              className="bg-primary text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaClipboardList style={{ marginRight: "8px" }} /> Your
              Evaluations
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Current Evaluations:</strong>{" "}
                <ProgressBar
                  now={60}
                  label="60%"
                  variant="info"
                  style={{ height: "1rem" }}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Past Evaluations:</strong>{" "}
                <Button
                  variant="link"
                  href="/evaluations/past"
                  style={{ color: "#007bff" }}
                >
                  View
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Card.Header
              className="bg-success text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaCheckCircle style={{ marginRight: "8px" }} /> Verification
              Tasks
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Pending Verifications:</strong>{" "}
                <ProgressBar
                  now={80}
                  label="80%"
                  variant="success"
                  style={{ height: "1rem" }}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Verified Credentials:</strong>{" "}
                <Button
                  variant="link"
                  href="/verification/verified"
                  style={{ color: "#007bff" }}
                >
                  View
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Log */}
      <Row className="mb-4">
        <Col>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <Card.Header
              className="bg-secondary text-white"
              style={{ fontSize: "1.2rem" }}
            >
              Recent Activity
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Evaluation submitted -{" "}
                <span className="text-muted">2 hours ago</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Verification approved -{" "}
                <span className="text-muted">1 day ago</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Profile updated - <span className="text-muted">3 days ago</span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Helpful Tips Section */}
      <Row>
        <Col>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <Card.Header
              className="bg-info text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaLightbulb style={{ marginRight: "8px" }} /> Helpful Tips
            </Card.Header>
            <Card.Body>
              <p>
                Need help getting started? Review your pending evaluations or
                check for any new notifications!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
