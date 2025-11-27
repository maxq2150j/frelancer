import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(loginData.email))
      temp.email = "Enter valid email address.";

    if (loginData.password.length < 6)
      temp.password = "Password must be at least 6 characters.";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "#",
          loginData
        );

        if (response.data.success) {
          alert("Login Successful!");
          const role = response.data.role;
          localStorage.setItem("token", response.data.token);

          if (role === "freelancer") navigate("/freelancer-dashboard");
          else if (role === "client") navigate("/client-dashboard");
          else if (role === "admin") navigate("/admin-dashboard");
          else alert("Invalid user role!");

        } else {
          alert(response.data.message || "Invalid email or password!");
        }
      } catch (error) {
        console.error(error);
        alert("Server Error! Please try again.");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8faff" }}
    >
      <div
        className="p-5 text-center"
        style={{
          width: "450px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="fw-bold mb-2">Login</h2>
        <p className="text-muted mb-4">Welcome back to FreVolo.</p>

        <Form onSubmit={handleLogin}>
         
          <Form.Group className="mb-3 text-start">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@mail.com"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

         
          <Form.Group className="mb-4 text-start">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="w-100 fw-semibold mb-3"
            style={{ borderRadius: "6px" }}
          >
            Login
          </Button>
        </Form>

        
        <p className="mt-3">
          Don't have an account? <span
              style={{ color: "black", cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
