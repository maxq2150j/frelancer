import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage logic
    const existingFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
    existingFeedback.push(formData);
    localStorage.setItem("feedbacks", JSON.stringify(existingFeedback));

    // show success alert
    setSuccess(true);

    // clear form
    setFormData({ name: "", email: "", message: "" });

    // hide alert after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <Row className="gy-4">

        {/* Form Section */}
        <Col md={6}>
          <div className="p-4 shadow rounded bg-light">

            {success && (
              <Alert variant="success">
                Thank you! Your message has been submitted successfully.
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Write your feedback..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </div>
        </Col>

        {/* Google Map */}
        <Col md={6}>
          <div className="shadow rounded overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60955.84365425182!2d73.78980263340694!3d18.520430325658744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06d8b16c001%3A0xa5b751bda3f90db8!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Contact;
