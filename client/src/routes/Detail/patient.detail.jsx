import React from "react";
import {
  MdKeyboardBackspace,
  MdOutlineBloodtype,
  MdOutlineEmail,
  MdOutlineSick,
} from "react-icons/md";
import { GiDna1 } from "react-icons/gi";
import { TbDisabled } from "react-icons/tb";
import { RiVirusLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components/heading/heading.component";
import { Figure, Img } from "../../components/img/img.styled";
import { Section } from "../../containers/container.styled";
// import avi from '../../assets/images/user-avatar.png'
import avi from "../../assets/images/img1.jpg";
import { Banner, Div } from "./detail.style";
import Record from "../../components/record/record.component";
import { Icon } from "../../components/icon/icon.styled";
import {
  BsCalendar3Event,
  BsFillPlusCircleFill,
  BsGenderAmbiguous,
  BsQuestionSquare,
  BsTelephone,
} from "react-icons/bs";

const PatientDetail = () => {
  return (
    <Section detail>
      <Banner>
        <Link to="/dashboard/patients">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Banner>
      <Div banner>
        <Figure detail>
          <Img src={avi} alt="user's avatar" />
        </Figure>
        <div>
          <div>
            <h2>John Doe</h2>
            <SubHeading bio>P2022163823</SubHeading>
          </div>
          <Div bio>
            <div>
              <a href="mailto:johndoe@gmail.com">
                <Div icon>
                  <Icon detail>
                    <MdOutlineEmail />
                  </Icon>
                  <SubHeading bio>johndoe@gmail.com</SubHeading>
                </Div>
              </a>
              <a href="tel:+234809237289">
                <Div icon>
                  <Icon detail>
                    <BsTelephone />
                  </Icon>
                  <SubHeading bio>+234 8092 37289</SubHeading>
                </Div>
              </a>
              <Div icon>
                <Icon detail>
                  <MdOutlineBloodtype />
                </Icon>
                <SubHeading bio>Blood Group: O+</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <GiDna1 />
                </Icon>
                <SubHeading bio>Genotype: AS</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <MdOutlineSick />
                </Icon>
                <SubHeading bio>Allegies: Penicillin</SubHeading>
              </Div>
            </div>
            <div>
              <Div icon>
                <Icon detail>
                  <BsGenderAmbiguous />
                </Icon>
                <SubHeading bio>Sex: Male</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <BsQuestionSquare />
                </Icon>
                <SubHeading bio>Status: Not Admitted</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <BsCalendar3Event />
                </Icon>
                <SubHeading bio>Next Appointment: 23rd June 2022</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <TbDisabled />
                </Icon>
                <SubHeading bio>Disability: Nill</SubHeading>
              </Div>
              <Div icon>
                <Icon detail>
                  <RiVirusLine />
                </Icon>
                <SubHeading bio>Chronic Illness: AVN</SubHeading>
              </Div>
            </div>
          </Div>
        </div>
      </Div>
      <hr />
      <Record />
      <Link to="new_entry">
        <Icon add>
          <BsFillPlusCircleFill title="New Entry" />
        </Icon>
      </Link>
    </Section>
  );
};

export default PatientDetail;
