import React from "react";
import "./style.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "../../components/UI/InputField";
import { IoMdArrowRoundBack } from "react-icons/io";

const RegisterPage = () => {
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
              Sign up{" "}
              <Link to="/">
                <IoMdArrowRoundBack style={{ float: "right" }} />
              </Link>
            </h4>

            <hr />
            <InputField
              inputType="input"
              type="text"
              label="Name"
              placeholder="Name"
            />
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
              <Button variant="primary">Sign up</Button>
            </div>
            <hr />
            <div className="formFooter">
              <p className="m-auto text-secondary">Alredy have an account?</p>
              <Link to="/login" style={{ fontWeight: "500" }}>
                Log in
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
