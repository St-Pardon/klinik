import styled, {css} from 'styled-components'

export const SubHeading = styled.h4`
  color: #444446;
  font-size: 1rem;
  padding: 10px 0;

  ${(props) =>
    props.login &&
    css`
      font-size: 1.5rem;
      text-align: center;
    `}
  ${(props) =>
    props.widget &&
    css`
      font-size: 1.2rem;
    `}
  ${(props) =>
    props.bio &&
    css`
      padding: 5px 0;
    `}
    ${(props) =>
    props.profile &&
    css`
      color: #0765fe;
      font-size: 1.3rem;
    `}
`;

export const SecHeading = styled.h3`
  color: #444446;
  ${(props) =>
    props.service &&
    css`
      text-align: center;
      font-size: 1.2rem;
    `}
  ${(props) =>
    props.name &&
    css`
      color: #0765fe;
      padding: 15px 0 0 0;
      font-size: 2rem;
    `}
`;