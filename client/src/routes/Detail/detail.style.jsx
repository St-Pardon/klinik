import styled, {css} from "styled-components";

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
`;

export const Record = styled.div`
  padding: 30px;
  border-bottom: 1px solid #84878c;
`;

export const Para = styled.p`
  padding: 4px 0;
  color: #84878c;

  ${(props) =>
    props.comment &&
    css`
      width: 80%;
    `}
`;

export const Span = styled.span`
  color: #565555;
  font-weight: 600;
`;