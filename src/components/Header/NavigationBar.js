import React, { useState } from "react";
import "./Navigation.css";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import LoginPage from "../../container/Login/LoginPage";
import RegisterPage from "../../container/Register/RegisterPage";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const NavigationBar = ({ handleShow }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const closeRegModal = () => setRegisterModal(false);

  const showRegModal = () => {
    setLoginModal(false);
    setRegisterModal(true);
  };

  const closeLoginModal = () => setLoginModal(false);
  const showLoginModal = () => {
    setRegisterModal(false);
    setLoginModal(true);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <AiOutlineMenuUnfold
            className="sidebar-menu-icon"
            onClick={handleShow}
          />
          <Navbar.Brand>
            <Link to="/" className="text-secondary">
              Navigation
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Nav className="me-auto">
                <Link className="text-secondary" to="/settings">
                  Settings
                </Link>
              </Nav>
              <Button
                className="btn btn-primary m-2"
                size="sm"
                onClick={showRegModal}
              >
                Register
              </Button>
              <Button
                className="btn btn-primary m-2"
                size="sm"
                onClick={showLoginModal}
              >
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RegisterPage
        registerModal={registerModal}
        closeRegModal={closeRegModal}
        loginModal={loginModal}
        showLoginModal={showLoginModal}
      />

      <LoginPage
        loginModal={loginModal}
        closeLoginModal={closeLoginModal}
        showRegModal={showRegModal}
      />
    </>
  );
};

export default NavigationBar;
