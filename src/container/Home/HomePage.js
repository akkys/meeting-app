import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/register">
        <Button className="btn btn-primary m-2">Sign up</Button>
      </Link>
      <Link to="/login">
        <Button className="btn btn-primary">Login</Button>
      </Link>
    </>
  );
};

export default HomePage;
