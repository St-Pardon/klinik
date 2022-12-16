import styled, { css } from "styled-components";
import img from "../../assets/images/login-bg.jpg";

export const LoginContainer = styled.div`
  display: flex;
`;

export const Section = styled.section`
  width: 50%;
  height: 100vh;
  padding: 30px;

  ${(props) =>
    props.left &&
    css`
      background-image: url("${img}");
      background-position: center;
      background-size: cover;
      backround-repeat: norepeatg;
    `}
`;

export const Form = styled.form`
  margin: 30px auto;
  color: #84878c;
  width: 80%;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  outline: none;
  border: none;
  margin-top: 30px;
`;
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: unset;
  border: 1px solid #84878c;
  outline-color: #84878c;
  border-radius: 5px;
  ${(props) =>
    props.submit &&
    css`
      display: block;
      background-color: #0765fe;
      border-color: #0765fe;
      color: #fff;
      font-size: 1.05rem;
      margin: 30px 0;
      &:hover {
        opacity: 80%;
      }
    `}
`;
