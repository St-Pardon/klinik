import styled, { css } from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  width: 100%;
`;
export const Navlink = styled.a`
  color: #84878c;
  text-decoration: none;

  ${(props) =>
    props.ft &&
    css`
      color: #fff;
    `}
`;

export const Main = styled.main`
  background-color: #f6f9ff;
`;
export const Section = styled.section`
  padding: 50px 0;

  ${(props) =>
    props.home &&
    css`
      display: flex;
      justify-content: space-around;
      align-items: center;
    `}
  ${(props) =>
    props.peek &&
    css`
      background-color: #0765fe;
    `}
`;
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 30px;
`;
export const HeroText = styled.h3`
  font-size: 3rem;
  color: #444446;
`;
export const HeroPara = styled.p`
  font-size: 1rem;
  padding: 10px 0;
  color: #84878c;
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;
export const Service = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 7px;
  box-shadow: 2px 1px 8px 10px rgba(200, 200, 255, 0.25);
`;

export const Para = styled.p`
  color: #84878c;
  font-size: 0.9rem;

   ${(props) =>
    props.about &&
    css`
      max-width: 700px;
      width: 100%; 
      margin: 20px auto
    `}
`;

export const WhyUs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0;
`;

export const Li = styled.li`
  list-style: none;
  color: #84878c;
  padding: 5px 0;
  &::before {
    content: "✔";
    padding: 3px 5px;
    margin: 0 5px 0 0;
    color: #ccc;
    font-size: 0.8rem;
    background-color: #0765fe;
    border-radius: 100%;
  }
`;

export const Footer = styled.footer`
  background: #0765fe;
  color: #fff;
  padding: 30px 0;
`;

export const FooterTop = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.p`
  padding: 5px 0;
`;
