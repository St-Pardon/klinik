import React from "react";
import { BsFillCalendar3WeekFill, BsPeopleFill } from "react-icons/bs";
import { MdContactSupport, MdSettings } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { Icon } from "../icon/icon.styled";
import { IconContainer, Menu } from "./sidebar.styled";
import { NavLink } from "react-router-dom";

const Sidebar = ({user_type}) => {
  const activeStyle = {
    color: "#0765fe",
  };
  const inactiveStyle = {
    color: "#444446",
  };

  return (
    <Menu>
      <NavLink
        to="overview"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <IconContainer>
          <Icon sb>
            <RiDashboardFill />
          </Icon>
          <p>Dashboard</p>
        </IconContainer>
      </NavLink>
      <NavLink
        to="patients"
        style={({ isActive }) => (isActive ? activeStyle : user_type === "patient" ? {display: "none"} : inactiveStyle)}
      >
        <IconContainer>
          <Icon sb>
            <BsPeopleFill />
          </Icon>
          <p>Patients</p>
        </IconContainer>
      </NavLink>
      <NavLink
        to="appointment"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <IconContainer>
          <Icon sb>
            <BsFillCalendar3WeekFill />
          </Icon>
          <p>Appointment</p>
        </IconContainer>
      </NavLink>
      <NavLink
        to="settings"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <IconContainer>
          <Icon sb>
            <MdSettings />
          </Icon>
          <p>Settings</p>
        </IconContainer>
      </NavLink>
      <NavLink
        to="support"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <IconContainer>
          <Icon sb>
            <MdContactSupport />
          </Icon>
          <p>Support</p>
        </IconContainer>
      </NavLink>
    </Menu>
  );
};

export default Sidebar;
