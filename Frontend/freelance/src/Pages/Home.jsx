import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      
      <section
        style={{
          background: "linear-gradient(135deg, #1d1d1d, #2b0039)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Find the Best Freelancers for Your Project
              </h1>
              <p style={{ fontSize: "18px", marginTop: "15px" }}>
                Hire top talent from around the world for design, development,
                writing, and more.
              </p>

              <Button
                as={Link}
                to="/login"
                variant="light"
                style={{
                  marginTop: "20px",
                  padding: "12px 25px",
                  fontWeight: "600",
                  borderRadius: "8px",
                }}
              >
                Get Started
              </Button>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--employee-worker-job-man-office-pack-3d-illustrations-6103999.png"
                alt="Hero"
                style={{ width: "90%", maxWidth: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

     
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <Container>
          <h2 className="text-center mb-4">Popular Categories</h2>

          <Row>
            {[
              "Web Development",
              "Graphics & Design",
              "UI/UX",
              "Mobile App",
              "Digital Marketing",
              "Content Writing",
            ].map((cat, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card
                  className="shadow-sm"
                  style={{
                    padding: "25px",
                    borderRadius: "15px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0px 5px 18px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <h5>{cat}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-5">Why Choose FreVolo?</h2>

          <Row>
            {[
              {
                title: "Top Talent",
                desc: "Hire the best freelancers across the world with verified skills.",
              },
              {
                title: "Secure Payments",
                desc: "Your payments are 100% secure using our trusted gateway.",
              },
              {
                title: "Easy Collaboration",
                desc: "Chat, share files, and manage your projects in one place.",
              },
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card
                  className="shadow-sm p-4 text-center"
                  style={{
                    borderRadius: "15px",
                    transition: "0.3s",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section
        style={{
          background: "linear-gradient(135deg, #2b0039, #ff2d55)",
          padding: "70px 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <Container>
          <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
            Start Your Journey With FreVolo Today
          </h2>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Join thousands of freelancers and clients working together.
          </p>
          <Button
            as={Link}
            to="/register"
            variant="light"
            style={{
              padding: "12px 30px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            Join Now
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
