import styled, {css} from "styled-components";

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
    props.whyus &&
    css`
      max-width: 500px;
      height: 380px;
      border-radius: 5px;
      overflow: hidden;
    `}
`;