import styled, { css } from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 180px;
  background-color: skyblue;
  position: relative;
`;

export const Div = styled.div`
  display: flex;
  ${(props) =>
    props.banner &&
    css`
      gap: 20px;
      padding: 0 30px;
    `}
  ${(props) =>
    props.bio &&
    css`
      gap: 40px;
    `}
  ${(props) =>
    props.record &&
    css`
      display: block;
      margin-bottom: 10px;
    `}
  ${(props) =>
    props.icon &&
    css`
      gap: 7px;
      aligb-items: center;
    `}
`;
