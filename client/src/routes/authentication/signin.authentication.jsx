import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "../../components/switch/switch.component";
import { MdKeyboardBackspace } from "react-icons/md";
import { LoginContainer, Section } from "./signin.styled";
import { SubHeading } from "../../components/heading/heading.component";
import { Fieldset, Form, Input } from "../../components/form/form.styled";
import { GoInfo } from "react-icons/go";

const Signin = ({ getUser, getUser_role, getJob_type }) => {
  const [file_no, setFile_no] = useState("");
  const [reg_no, setReg_no] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("staff");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // delete and make api call here
    if (isSelected !== "staff") {
      getUser("patient");
      if (file_no === "P202200001" && password === "qwertyuiop") {
        navigate("/dashboard");
      }
    } else {
      getUser("staff");
      if (
        (reg_no === "S202200000" ||
          reg_no === "S202200001" ||
          reg_no === "S202200002" ||
          reg_no === "S202200003" ||
          reg_no === "S202200004") &&
        password === "qwertyuiop"
      ) {
        switch (reg_no) {
          case "S202200001":
            getJob_type("nurse");
            getUser_role("user");
            break;
          case "S202200002":
            getJob_type("doctor");
            getUser_role("user");
            break;
          case "S202200003":
            getJob_type("chemist");
            getUser_role("user");
            break;
          case "S202200004":
            getJob_type("pharmasist");
            getUser_role("user");
            break;
          case "S202200000":
            getJob_type("doctor");
            getUser_role("admin");
            break;
          default:
            break;
        }

        navigate("/dashboard");
      }
    }
  };

  return (
    <LoginContainer>
      <Section left>
        <Link to="/">
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Section>
      <Section>
        <SubHeading login>Welcome to Klinik, kindly Login</SubHeading>
        <Form onSubmit={(e) => handleLogin(e)}>
          <div className="tooltip">
            <GoInfo />
            To test demo hover here
            <span className="tooltiptext">Signin with "P202200001" for patient and "S202200001 for Nurse". use "qwertyuiop" as password. Explore on PC</span>
          </div>
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
            <label htmlFor={isSelected === "staff" ? "Reg No:" : "File No:"}>
              {isSelected === "staff" ? "Reg No:" : "File No:"}
            </label>
            <Input
              type="text"
              placeholder={
                isSelected === "staff" ? "eg. S2022000001" : "eg. P2022000001"
              }
              name={isSelected === "staff" ? "Reg No:" : "File No:"}
              id={isSelected === "staff" ? "Reg No:" : "File No:"}
              // value={reg_no}
              value={isSelected === "staff" ? reg_no : file_no}
              onChange={(e) => {
                isSelected === "staff"
                  ? setReg_no(e.target.value)
                  : setFile_no(e.target.value);
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
