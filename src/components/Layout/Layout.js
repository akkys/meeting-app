import React, { useState } from "react";
import "./Layout.css";
import NavigationBar from "../Header/NavigationBar";
import { Offcanvas } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <NavigationBar handleShow={handleShow} />

      {/* Sidebar Menu */}
      <Offcanvas show={showSidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Side Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
            <Sidebar />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {props.children}
    </>
  );
};

export default Layout;
