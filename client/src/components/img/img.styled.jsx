import styled, { css } from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Figure = styled.figure`
  ${(props) =>
    props.logo &&
    css`
      width: 150px;
    `}
  ${(props) =>
    props.hero &&
    css`
      max-width: 500px;
    `}
  ${(props) =>
    props.detail &&
    css`
      max-width: 300px;
      max-height: 300px;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      top: -90px;
    `}
  ${(props) =>
    props.avi &&
    css`
      width: 60px;
      heigth: 60px;
      border-radius: 100%;
      overflow: hidden;
    `}
  ${(props) =>
    props.whyus &&
    css`
      max-width: 500px;
      height: 380px;
      border-radius: 5px;
      overflow: hidden;
    `}
`;
