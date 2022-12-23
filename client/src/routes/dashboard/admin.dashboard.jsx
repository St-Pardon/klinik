import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import { Main } from "./dashboard.styled";

const AdminDashboard = () => {
  return (
    <>
      <HeaderComponent />
      <Main>
        <Sidebar user_type="admin" />
        <Outlet />
      </Main>
    </>
  );
};

export default AdminDashboard;
