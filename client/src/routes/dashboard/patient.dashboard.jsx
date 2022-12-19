import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import { Main } from "./dashboard.styled";

const PatientDashboard = () => {
  return (
    <>
      <HeaderComponent />
      <Main>
        <Sidebar user_type="patient" />
        <Outlet />
      </Main>
    </>
  );
};

export default PatientDashboard;
