import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">

          {/* Brand */}
          <Col md={3} className="mb-3">
            <h5 className="fw-bold">Frevolo</h5>
            <p style={{ fontSize: "14px" }}>
              A platform connecting Clients & Freelancers for seamless work.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li><a className="text-light text-decoration-none" href="/">Home</a></li>
              <li><a className="text-light text-decoration-none" href="/about">About</a></li>
              <li><a className="text-light text-decoration-none" href="/contact">Contact</a></li>
              <li><a className="text-light text-decoration-none" href="/login">Login</a></li>
            </ul>
          </Col>

          {/* Contact Details */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              <FaPhoneAlt className="me-2" /> +91 98765 43210
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              <FaEnvelope className="me-2" /> support@freelanceportal.com
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              <FaMapMarkerAlt className="me-2" /> Pune, India
            </p>
          </Col>

          {/* Social Icons */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">Follow Me</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">

              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaGithub />
              </a>
              <a href="https://peerlist.io" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <SiPeerlist />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaYoutube />
              </a>

            </div>
          </Col>

        </Row>

        <hr className="border-secondary" />

        <p className="text-center mb-0" style={{ fontSize: "13px" }}>
          © {new Date().getFullYear()} Freelance Portal | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
