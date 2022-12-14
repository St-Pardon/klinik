import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: unset;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
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
`;
export const GetStated = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 7px;
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
export const SecHeading = styled.h3`
  ${(props) =>
    props.service &&
    css`
      text-align: center;
      font-size: 1.2rem;
    `}
`;
export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  `;
  export const Service = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 300px;
  border-radius: 7px;
  box-shadow: 2px 1px 8px 10px rgba(200, 200, 255, 0.25);
`;
export const ServiceIcon = styled.div`
  border-radius: 5px;
  background-color: #0765fe;
  text-align: center;
`;
export const SubHeading = styled.h4`
  color: #444446;
  font-size: 1rem;
  padding: 10px 0;
`;
export const Para = styled.p`
  color: #84878c;
  font-size: 0.9rem;
`;
