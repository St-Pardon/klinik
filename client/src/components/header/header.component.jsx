import React from "react";
import { Figure, Img } from "../img/img.styled";
import { Header, Nav } from "./header.styled";
import img from "../../assets/logo/klinik-logo-dark.png";
import avi from '../../assets/images/user-avatar.png'
import { BsQuestion } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Icon } from "../icon/icon.styled";
const HeaderComponent = () => {
  return (
    <Header dashboard>
      <Figure logo>
        <Img src={img} alt="Klinik logo" />
      </Figure>
      <Nav>
        <Icon header>
          <BsQuestion />
        </Icon>
        <Icon header>
          <IoMdNotificationsOutline />
        </Icon>
        <Figure avi>
          <Img src={avi} alt="avatar" />
        </Figure>
        <p>Joe Doe</p>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
