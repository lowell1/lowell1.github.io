import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Display email on hover or focus
function Email() {
  const [emailLink, setEmailLink] = useState("");

  const showEmail = () => {
    setEmailLink("mailto:lowelljacobs@mail.com");
  };

  return (
    <a href={emailLink} onMouseEnter={showEmail} onFocus={showEmail}>
      <i class="bi bi-envelope fs-1"></i>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <Container fluid className="bg-secondary">
        <a className="me-2" href="https://www.linkedin.com/in/lowell-jacobs">
          <i class="bi bi-linkedin fs-1"></i>
        </a>
        <a className="me-2" href="https://www.github.com/lowell1">
          <i class="bi bi-github fs-1"></i>
        </a>
        <Email />
      </Container>
    </>
  );
}
