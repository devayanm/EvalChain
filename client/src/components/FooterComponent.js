import React from "react";
import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} EvalChain. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white">
            Terms of Service
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;
