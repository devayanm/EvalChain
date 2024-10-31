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
  Pagination,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import api from "../services/api";

function Dashboard() {
  const [evaluations, setEvaluations] = useState([]);
  const [filteredEvaluations, setFilteredEvaluations] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchEvaluations = async () => {
      setLoading(true);
      try {
        const response = await api.getUserEvaluations(token);
        setEvaluations(response.data);
        setFilteredEvaluations(response.data);
      } catch (err) {
        setError("Could not fetch evaluations. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvaluations();
  }, [token]);

  useEffect(() => {
    const filtered = evaluations
      .filter(
        (evaluate) =>
          evaluate.title.toLowerCase().includes(search.toLowerCase()) &&
          (statusFilter === "All" || evaluate.status === statusFilter)
      )
      .sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];
        if (sortField === "createdAt") {
          return sortOrder === "asc"
            ? new Date(valueA) - new Date(valueB)
            : new Date(valueB) - new Date(valueA);
        }
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      });
    setFilteredEvaluations(filtered);
    setCurrentPage(1);
  }, [search, statusFilter, evaluations, sortField, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvaluations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

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
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search evaluations"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Form.Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <ButtonGroup>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setSortField("title");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  Sort by Title
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setSortField("createdAt");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  Sort by Date
                </Button>
              </ButtonGroup>
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
                  {currentItems.length > 0 ? (
                    currentItems.map((evaluate, idx) => (
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
                                : evaluate.status === "Pending"
                                ? "bg-warning"
                                : "bg-danger"
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

          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              {[
                ...Array(Math.ceil(filteredEvaluations.length / itemsPerPage)),
              ].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
