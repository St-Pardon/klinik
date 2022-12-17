import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: unset;
  display: flex;
  align-items: center;
  
  ${(props) =>
    props.lp &&
    css`
    justify-content: space-around;
    `}
    ${(props) =>
      props.dashboard &&
      css`
      background-color: #FFFFFF;
      padding: 0 20px;
      justify-content: space-between;
    `}
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;
