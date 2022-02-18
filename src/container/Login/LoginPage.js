import React from "react";
import { Button } from "react-bootstrap";
import InputField from "../../components/UI/InputField";
import ModalForm from "../../components/UI/ModalForm";

const LoginPage = ({ loginModal, closeLoginModal, showRegModal }) => {
  return (
    <ModalForm
      show={loginModal}
      handleClose={closeLoginModal}
      size="sm"
      // handleSubmit={}
      modalTitle="Sign up"
    >
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
      <div className="modalFooter">
        <p className="m-auto text-secondary">Don't have an account?</p>

        <span className="text-primary" onClick={showRegModal}>
          Sign up
        </span>
      </div>
    </ModalForm>
  );
};

export default LoginPage;
