import { useState } from "react";
import Switch from "../../components/switch/switch.component";
import { MdKeyboardBackspace } from "react-icons/md";
import {
  Fieldset,
  Form,
  Input,
  LoginContainer,
  Section,
} from "./signin.styled";
import { SubHeading } from "../../components/heading/heading.component";

const Signin = () => {
  const [file_no, setFile_no] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("staff");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <Section left>
        <MdKeyboardBackspace style={{ fontSize: "1.8rem" }} />
      </Section>
      <Section>
        <SubHeading login>Welcome to Klinik, kindly Login</SubHeading>
        <Form onSubmit={(e) => handleLogin(e)}>
          <p>What best describe you?</p>
          <Fieldset>
            <Switch
              content="I'm a Staff"
              inputName="user_type"
              inputId="staff"
              inputValue="staff"
              checked={isSelected === "staff"}
              handleRadio={(e) => {
                setIsSelected(e.target.value);
              }}
            />
            <Switch
              content="I'm a Patient"
              inputName="user_type"
              inputId="patient"
              inputValue="patient"
              checked={isSelected === "patient"}
              handleRadio={(e) => {
                setIsSelected(e.target.value);
              }}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="file_no">
              {isSelected === "staff" ? "Reg No:" : "File No:"}
            </label>
            <Input
              type="text"
              placeholder={
                isSelected === "staff" ? "eg. S2022000001" : "eg. P2022000001"
              }
              name="file_no"
              id="file_no"
              value={file_no}
              onChange={(e) => {
                setFile_no(e.target.value);
              }}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Fieldset>
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              value="remember_me"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />{" "}
            Remember me{" "}
          </label>
          <Input submit type="submit" value="Signin" />
        </Form>
      </Section>
    </LoginContainer>
  );
};

export default Signin;
