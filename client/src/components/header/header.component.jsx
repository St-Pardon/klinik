import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Figure, Img } from "../img/img.styled";
import { Dropdown, Header, Nav } from "./header.styled";
import img from "../../assets/logo/klinik-logo-dark.png";
import avi from "../../assets/images/user-avatar.png";
import { BsQuestion } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Icon } from "../icon/icon.styled";
const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header dashboard>
      <Figure logo>
        <Link to="/dashboard">
          <Img src={img} alt="Klinik logo" />
        </Link>
      </Figure>
      <Nav>
        <Icon header>
          <BsQuestion />
        </Icon>
        <Icon header>
          <IoMdNotificationsOutline />
        </Icon>
        <Nav avatar onClick={() => setOpen(!open)}>
          <Figure avi>
            <Img src={avi} alt="avatar" />
          </Figure>
          <p>Joe Doe</p>
        </Nav>
        {open ? (
          <Dropdown>
            <Link to="/profile" onClick={() => setOpen(!open)}>
              <p>Profile</p>
            </Link>
            <Link to="/signout" onClick={() => setOpen(!open)}>
              <p>Sign Out</p>
            </Link>
          </Dropdown>
        ) : null}
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
