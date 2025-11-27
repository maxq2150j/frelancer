import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!/^[A-Za-z ]{3,30}$/.test(userData.name))
      temp.name = "Name must be 3-30 letters only.";

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(userData.email))
      temp.email = "Enter valid email address.";

    if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,20}$/.test(userData.password))
      temp.password =
        "Password must be 6-20 chars, include uppercase, lowercase & number.";

    if (!userData.role) temp.role = "Please select a role.";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "#",
          userData
        );

        if (response.data.success) {
          alert("Registration Successful!");
          navigate("/login");
        } else {
          alert(response.data.message || "Registration failed!");
        }
      } catch (error) {
        console.error(error);
        alert("Server error! Please try again.");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#f8faff",
      }}
    >
      <div
        className="p-5"
        style={{
          width: "450px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
       
        <h2 className="fw-bold mb-2 text-center">Create your account</h2>
        <p className="text-muted mb-4 text-center">
          Join FreVolo and start your journey today.
        </p>

        <Form onSubmit={handleSubmit}>
         
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

      
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@mail.com"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

         
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

        
          <Form.Group className="mb-4">
            <Form.Label>Select Role</Form.Label>
            <Form.Select
              value={userData.role}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
              isInvalid={!!errors.role}
            >
              <option value="">-- Choose Role --</option>
              <option value="freelancer">Freelancer</option>
              <option value="client">Client</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.role}
            </Form.Control.Feedback>
          </Form.Group>

         
          <Button
            variant="dark"
            type="submit"
            className="w-100 fw-semibold mb-3"
            style={{ borderRadius: "6px" }}
          >
            Register
          </Button>

         
          <p className="text-center mt-2">
            Already have an account?{" "}
            <span
              style={{ color: "black", cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
