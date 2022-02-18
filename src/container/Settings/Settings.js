import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Layout from "../../components/Layout/Layout";

const Settings = () => {
  return (
    <Layout>
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="setting-container">Settings</div>
    </Layout>
  );
};

export default Settings;
