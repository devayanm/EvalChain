import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaUser, FaLock, FaBell, FaCog } from "react-icons/fa";

function SettingsPage() {
  return (
    <Container className="mt-4" style={{ maxWidth: "900px" }}>
      <h1
        className="mb-4"
        style={{ fontSize: "2rem", fontWeight: "bold", color: "#343a40" }}
      >
        Settings
      </h1>

      <Row className="mb-4">
        {/* Personal Information Settings */}
        <Col md={12}>
          <Card
            className="mb-4"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <Card.Header
              className="bg-primary text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaUser style={{ marginRight: "8px" }} /> Personal Information
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
                <Button variant="primary">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Account Security Settings */}
        <Col md={12}>
          <Card
            className="mb-4"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <Card.Header
              className="bg-danger text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaLock style={{ marginRight: "8px" }} /> Account Security
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formCurrentPassword" className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter current password"
                  />
                </Form.Group>
                <Form.Group controlId="formNewPassword" className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                  />
                </Form.Group>
                <Button variant="danger">Update Password</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Notification Settings */}
        <Col md={12}>
          <Card
            className="mb-4"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <Card.Header
              className="bg-warning text-white"
              style={{
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaBell style={{ marginRight: "8px" }} /> Notifications
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Check
                  type="switch"
                  id="emailNotifications"
                  label="Email Notifications"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="smsNotifications"
                  label="SMS Notifications"
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="appNotifications"
                  label="App Notifications"
                  className="mb-3"
                />
                <Button variant="warning" style={{ color: "#fff" }}>
                  Update Notifications
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* App Preferences */}
        <Col md={12}>
          <Card
            className="mb-4"
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
              <FaCog style={{ marginRight: "8px" }} /> App Preferences
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formTheme" className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Control as="select">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System Default</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formLanguage" className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="info" style={{ color: "#fff" }}>
                  Save Preferences
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SettingsPage;
