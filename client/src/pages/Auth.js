import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Card.Title className="text-center mb-4">
          {isLogin ? "Login" : "Signup"}
        </Card.Title>

        {isLogin ? <Login /> : <Signup />}

        <Row className="mt-3">
          <Col className="text-center">
            <Button variant="link" onClick={toggleForm}>
              {isLogin
                ? "Don’t have an account? Signup"
                : "Already have an account? Login"}
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
