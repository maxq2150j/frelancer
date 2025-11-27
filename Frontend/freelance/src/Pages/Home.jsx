import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../assets/Home/freehome11.png";

const Home = () => {
  return (
    <>
     
     
      <section
        style={{
          background: "#f7f7f7",
          padding: "80px 0",
          color: "black",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 style={{ fontSize: "50px", fontWeight: "700", lineHeight: "1.2" }}>
                Find the Best Freelancers for Your Project
              </h1>
              <p style={{ fontSize: "18px", marginTop: "15px" }}>
                Hire top talent from around the world for design, development, writing, and more.
              </p>
              <Button
                as={Link}
                to="/login"
                variant="dark"
                style={{ marginTop: "20px", padding: "12px 25px", fontWeight: "600", borderRadius: "8px" }}
              >
                Get Started
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={Logo}
                alt="Hero"
                style={{ width: "90%", maxWidth: "620px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-4">Popular Categories</h2>
          <Row>
            {[
              { name: "Web Development", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
              { name: "Graphics & Design", img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png" },
              { name: "UI/UX", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
              { name: "Mobile App", img: "https://cdn-icons-png.flaticon.com/512/888/888857.png" },
              { name: "Digital Marketing", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
              { name: "Content Writing", img: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png" },
            ].map((cat, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <Card
                  className="shadow-sm p-3 text-center category-card hover-category"
                  style={{
                    borderRadius: "15px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={() => window.location.href = "/login"}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={cat.img}
                      alt={cat.name}
                      style={{ width: "80px", height: "80px", marginBottom: "15px" }}
                    />
                  </div>
                  <h5>{cat.name}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     
     
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <Container>
          <h2 className="text-center mb-5">Why Choose FreVolo?</h2>
          <Row>
            {[
              { title: "Top Talent", desc: "Hire the best freelancers across the world with verified skills." },
              { title: "Secure Payments", desc: "Your payments are 100% secure using our trusted gateway." },
              { title: "Easy Collaboration", desc: "Chat, share files, and manage your projects in one place." },
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm p-4 text-center" style={{ borderRadius: "15px" }}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     
     
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-5">Top Freelancers</h2>
          <Row>
            {[
              { name: "John Doe", skill: "Web Developer", img: "https://i.pravatar.cc/150?img=11" },
              { name: "Jane Smith", skill: "UI/UX Designer", img: "https://i.pravatar.cc/150?img=12" },
              { name: "Mike Johnson", skill: "Mobile App Developer", img: "https://i.pravatar.cc/150?img=13" },
              { name: "Lisa Brown", skill: "Digital Marketer", img: "https://i.pravatar.cc/150?img=14" },
              { name: "Tom Wilson", skill: "Content Writer", img: "https://i.pravatar.cc/150?img=15" },
              { name: "Sara Lee", skill: "Graphic Designer", img: "https://i.pravatar.cc/150?img=16" },
            ].map((freelancer, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="shadow-sm p-3 text-center freelancer-card" style={{ borderRadius: "15px" }}>
                  <img
                    src={freelancer.img}
                    alt={freelancer.name}
                    className="rounded-circle mb-3 d-block mx-auto"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5>{freelancer.name}</h5>
                  <p>{freelancer.skill}</p>
                  <Button variant="dark" size="sm" as={Link} to="/login">
                    View Profile
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     
     
      <section style={{ padding: "60px 0", background: "#f7f7f7" }}>
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            {[
              {
                name: "Amit Verma",
                review: "FreVolo helped me find the perfect developer for my startup. Highly recommended!",
                img: "https://i.pravatar.cc/150?img=20",
              },
              {
                name: "Priya Sharma",
                review: "Amazing platform! I hired a designer and the experience was super smooth.",
                img: "https://i.pravatar.cc/150?img=32",
              },
              {
                name: "Rahul Singh",
                review: "Great freelancers and easy communication tools. Love this site!",
                img: "https://i.pravatar.cc/150?img=45",
              },
            ].map((test, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm p-4 text-center" style={{ borderRadius: "15px" }}>
                  <img
                    src={test.img}
                    alt={test.name}
                    className="rounded-circle mb-3 d-block mx-auto"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5>{test.name}</h5>
                  <p>"{test.review}"</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};



const styles = `
  .hover-category {
    transition: all 0.3s ease;
    border: 2px solid transparent !important;
  }
  .hover-category:hover {
    transform: translateY(-6px);
    background: #fff !important;
    border-color: #000 !important;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
  .hover-category:hover h5 {
    color: #000 !important;
  }
  .hover-category:hover img {
    filter: none;
  }(0) invert(1);
  }
`;



typeof document !== "undefined" && (() => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
})();

export default Home;
