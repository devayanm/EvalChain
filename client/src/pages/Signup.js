import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/slices/authSlice";
import { Form, Button, Container, Alert, Spinner, Card } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa"; 

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (
      formEl.checkValidity() === false ||
      form.password !== form.confirmPassword
    ) {
      e.stopPropagation();
      setValidated(true);
      setError("Passwords do not match or are invalid");
      return;
    }
    setValidated(false);
    setError(null);

    try {
      await dispatch(signupUser(form)).unwrap();
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && (
            <Alert variant="success">
              Signup successful! You can now login.
            </Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter a strong password"
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Password must meet criteria.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Passwords must match.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="mt-4 w-100"
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Signup"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signup;
