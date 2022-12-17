import React from "react";
import { BsFillCalendar3WeekFill, BsPeopleFill } from "react-icons/bs";
import { MdContactSupport, MdSettings } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { Icon } from "../icon/icon.styled";
import { IconContainer, Menu } from "./sidebar.styled";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu>
      <Link to="/dashboard/overview">
        <IconContainer>
          <Icon sb>
            <RiDashboardFill />
          </Icon>
          <p>Dashboard</p>
        </IconContainer>
      </Link>
      <Link to="/dashboard/patients">
        <IconContainer>
          <Icon sb>
            <BsPeopleFill />
          </Icon>
          <p>Patients</p>
        </IconContainer>
      </Link>
      <Link to="/dashboard/appointment">
        <IconContainer>
          <Icon sb>
            <BsFillCalendar3WeekFill />
          </Icon>
          <p>Appointment</p>
        </IconContainer>
      </Link>
      <Link to="/dashboard/settings">
        <IconContainer>
          <Icon sb>
            <MdSettings />
          </Icon>
          <p>Settings</p>
        </IconContainer>
      </Link>
      <Link to="/dashboard/support">
        <IconContainer>
          <Icon sb>
            <MdContactSupport />
          </Icon>
          <p>Support</p>
        </IconContainer>
      </Link>
    </Menu>
  );
};

export default Sidebar;
