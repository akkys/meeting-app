import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import InputField from "../../components/UI/InputField";

const LoginPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 4, offset: 4 }}
          className="registerContainer"
        >
          <Form>
            <h4>
              Login
              <Link to="/">
                <IoMdArrowRoundBack style={{ float: "right" }} />
              </Link>
            </h4>
            <hr />
            <InputField
              inputType="input"
              type="email"
              label="Email"
              placeholder="name@example.com"
            />
            <InputField
              inputType="input"
              type="password"
              label="Password"
              placeholder="at least 8 character"
            />
            <div className="d-grid gap-2">
              <Button variant="primary">Login</Button>
            </div>
            <hr />
            <div className="formFooter">
              <p className="m-auto text-secondary">Don't have an account?</p>
              <Link to="/register" style={{ fontWeight: "500" }}>
                Sign up
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
