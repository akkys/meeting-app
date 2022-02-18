import React from "react";
import "./Sidebar.css";
import { RiVideoChatLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import { FiUsers, FiSettings } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-top">
        <span>
          <RiVideoChatLine size="23" /> <label>Meets</label>
        </span>
        <span>
          <ImStack size="23" /> <label>Projects</label>
        </span>
        <span>
          <FiUsers size="23" /> <label>Users</label>
        </span>
      </div>
      <div className="sidebar-bottom">
        <span>
          <HiOutlineSupport size="23" /> <label>Support</label>
        </span>
        <span>
          <FiSettings size="23" /> <label>Settings</label>
        </span>
      </div>
    </>
  );
};

export default Sidebar;
