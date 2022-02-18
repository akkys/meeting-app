import React from "react";
import { Button } from "react-bootstrap";
import InputField from "../../components/UI/InputField";
import ModalForm from "../../components/UI/ModalForm";
import avatar from "../../image/avatar.jpg";

const RegisterPage = ({ registerModal, closeRegModal, showLoginModal }) => {
  return (
    <ModalForm
      show={registerModal}
      handleClose={closeRegModal}
      size="sm"
      // handleSubmit={}
      modalTitle="Sign up"
    >
      <img src={avatar} alt="avatar" />
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
      <div className="modalFooter">
        <p className="m-auto text-secondary">Alredy have an account?</p>

        <span className="text-primary" onClick={showLoginModal}>
          Login
        </span>
      </div>
    </ModalForm>
  );
};

export default RegisterPage;
