import React from "react";
import HeaderComponent from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import { Main } from "./dashboard.styled";
import { Outlet } from "react-router-dom";
const StaffDashboard = () => {
  return (
    <>
      <HeaderComponent />
      <Main>
        <Sidebar />
        <Outlet />
      </Main>
    </>
  );
};

export default StaffDashboard;
