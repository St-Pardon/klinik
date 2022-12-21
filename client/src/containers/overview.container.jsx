import React from "react";
import { SubHeading } from "../components/heading/heading.component";
import SummaryWidget from "../components/widgets/summary.widget";
import { Section, Row, Entry } from "./container.styled";

const OverviewContainer = ({ user_type }) => {
  return (
    <Section>
      <Row>
        {/*----- widgets for patients ----- */}

        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading widget>Last Diagonisis</SubHeading>
            <p>Malaria</p>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Next Appointment</SubHeading>
            <p>23rd June</p>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Last Vitals Checked</SubHeading>
            <ul style={{ listStyle: "none" }}>
              <li>height - 5.2"</li>
              <li>weight - 79kg</li>
              <li>Temperature - 45 &deg; C</li>
              <li>BP - 124/232 bpm</li>
            </ul>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Doctor's Information</SubHeading>
            <p>Name: Dr. Stephen Gerald (M.Med)</p>
            <p>Email: Stephengerald@fmc.com</p>
          </SummaryWidget>
        ) : null}

        {/* ----- widgets for Nurses ----- */}
        {user_type !== "patient" ? (
          <SummaryWidget>
            <SubHeading>Appointment Today</SubHeading>
            <p>
              <span>127</span> Appointments
            </p>
          </SummaryWidget>
        ) : null}
        {user_type !== "patient" ? (
          <SummaryWidget>
            <SubHeading>Doctors on Duty</SubHeading>
            <p>
              <span>7</span> Doctors
            </p>
          </SummaryWidget>
        ) : null}
        {user_type !== "patient" ? (
          <SummaryWidget>
            <SubHeading>Patients Admitted</SubHeading>
            <p>
              <span>14</span> Patients
            </p>
          </SummaryWidget>
        ) : null}
        {user_type !== "patient" ? (
          <SummaryWidget>
            <SubHeading>Processed Patients</SubHeading>
            <ul style={{ listStyle: "none" }}>
              <li>John Snow</li>
              <li>Tormound Gaintsbane</li>
              <li>Bruce Wayne</li>
              <li>Chole Sullivan</li>
            </ul>
          </SummaryWidget>
        ) : null}
      </Row>
      <Row>
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Prescription History</SubHeading>
            <Entry>
              <p>
                <strong>Antifeed</strong>
              </p>
              <p>
                <em>13, January 2022</em>
              </p>
              <p>By: Dr fred michael</p>
              <p>Dosage: 3tabs 3 times daily</p>
              <p></p>
            </Entry>
            <Entry>
              <p>
                <strong>Pandole</strong>
              </p>
              <p>
                <em>26, March 2021</em>
              </p>
              <p>By: Dr john Freeman</p>
              <p>Dosage: 1 teaspoon 3 times daily</p>
              <p></p>
            </Entry>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Doctor's Entry</SubHeading>
            <Entry>
              <p>
                <strong>Entry by Dr tony Stark</strong>
              </p>
              <p>
                <em>Date: 5th June 2022</em>
              </p>
              <p>Symthoms: headache, sores, pain</p>
              <p>
                Comment: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Delectus veniam laborum, quas ullam, fugit, consectetur
                illo quae autem ea asperiores saepe? Quas debitis illo natus
                recusandae possimus atque maxime consequatur.
              </p>
              <p>Diagnosis: Ebola</p>
            </Entry>
            <Entry>
              <p>
                <strong>Entry by Dr fred michael</strong>
              </p>
              <p>
                <em>Date: 13th January 2022</em>
              </p>
              <p>Symthoms: headache, sores, pain</p>
              <p>
                Comment: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Delectus veniam laborum, quas ullam, fugit, consectetur
                illo quae autem ea asperiores saepe? Quas debitis illo natus
                recusandae possimus atque maxime consequatur.
              </p>
              <p>Diagnosis: Ebola</p>
            </Entry>
            <Entry>
              <p>
                <strong>Entry by Dr fred michael</strong>
              </p>
              <p>
                <em>Date: 13th January 2022</em>
              </p>
              <p>Symthoms: headache, sores, pain</p>
              <p>
                Comment: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Delectus veniam laborum, quas ullam, fugit, consectetur
                illo quae autem ea asperiores saepe? Quas debitis illo natus
                recusandae possimus atque maxime consequatur.
              </p>
              <p>Diagnosis: Ebola</p>
            </Entry>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Lab Works</SubHeading>
          </SummaryWidget>
        ) : null}
      </Row>
    </Section>
  );
};

export default OverviewContainer;
