import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="py-5">
      <Container>

        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <p className="text-center mx-auto mb-5" style={{ maxWidth: "700px", fontSize: "16px" }}>
          Freelance Portal is a smart platform that helps Clients connect with the best Freelancers.
          We aim to make online work simple, transparent, and trustworthy.
        </p>

        {/* Mission & Vision */}
        <Row className="gy-4 mb-5">
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0 h-100">
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p style={{ fontSize: "15px" }}>
                To build a reliable ecosystem where talented freelancers can find quality work,
                and clients can hire skilled professionals easily — all at one place.
              </p>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-4 shadow-sm border-0 h-100">
              <h4 className="fw-bold mb-3">Our Vision</h4>
              <p style={{ fontSize: "15px" }}>
                To become India’s fastest-growing freelancing community with fair pricing,
                secure communication, and transparent job workflows.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <h3 className="text-center fw-bold mb-4">Meet Our Team</h3>

        <Row className="gy-4">
          {/* Member 1 */}
          <Col md={4}>
            <Card className="text-center p-3 shadow border-0">
              <img
                src="https://i.pravatar.cc/200?img=1"
                alt="Team Member"
                className="rounded-circle mx-auto"
                width="120"
                height="120"
              />
              <h5 className="mt-3 fw-bold">Sanket Kulkarni</h5>
              <p className="text-muted mb-1">Frontend Developer</p>
              <p style={{ fontSize: "14px" }}>
                Expert in React, UI design, and modern web experiences.
              </p>
            </Card>
          </Col>

          {/* Member 2 */}
          <Col md={4}>
            <Card className="text-center p-3 shadow border-0">
              <img
                src="https://i.pravatar.cc/200?img=10"
                alt="Team Member"
                className="rounded-circle mx-auto"
                width="120"
                height="120"
              />
              <h5 className="mt-3 fw-bold">Rohan Patil</h5>
              <p className="text-muted mb-1">Backend Developer</p>
              <p style={{ fontSize: "14px" }}>
                Specializes in Spring Boot, APIs, and database architecture.
              </p>
            </Card>
          </Col>

          {/* Member 3 */}
          <Col md={4}>
            <Card className="text-center p-3 shadow border-0">
              <img
                src="https://i.pravatar.cc/200?img=32"
                alt="Team Member"
                className="rounded-circle mx-auto"
                width="120"
                height="120"
              />
              <h5 className="mt-3 fw-bold">Aditi Shinde</h5>
              <p className="text-muted mb-1">UI/UX Designer</p>
              <p style={{ fontSize: "14px" }}>
                Designs clean, user-friendly, and modern application interfaces.
              </p>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default About;
