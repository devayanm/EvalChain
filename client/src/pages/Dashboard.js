import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Table,
  Alert,
  Form,
  Row,
  Col,
  Spinner,
  Card,
} from "react-bootstrap";
import api from "../services/api";

function Dashboard() {
  const [evaluations, setEvaluations] = useState([]);
  const [filteredEvaluations, setFilteredEvaluations] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEvaluations = async () => {
      setLoading(true);
      try {
        const response = await api.getUserEvaluations(token);
        setEvaluations(response.data);
        setFilteredEvaluations(response.data);
      } catch (err) {
        setError("Could not fetch evaluations");
      } finally {
        setLoading(false);
      }
    };
    fetchEvaluations();
  }, [token]);

  useEffect(() => {
    setFilteredEvaluations(
      evaluations.filter((evaluate) =>
        evaluate.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, evaluations]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Dashboard</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && (
        <div className="text-center mt-5">
          <Spinner animation="border" />
        </div>
      )}

      {!loading && (
        <>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Search evaluations"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>

          <Card className="shadow-sm">
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Submitted</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvaluations.length > 0 ? (
                    filteredEvaluations.map((evaluate, idx) => (
                      <tr key={idx}>
                        <td>{evaluate.title}</td>
                        <td>{evaluate.description}</td>
                        <td>
                          {new Date(evaluate.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              evaluate.status === "Approved"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {evaluate.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No evaluations found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
