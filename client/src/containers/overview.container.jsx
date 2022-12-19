import React from "react";
import SummaryWidget from "../components/widgets/summary.widget";
import { Section, Row } from "./container.styled";

const OverviewContainer = ({ user_type }) => {
  return (
    <Section>
      <Row>
        {user_type !== "patient" ? (
          <SummaryWidget>
            <h3>Appointment Today</h3>
            <p>
              <span>127</span> Appointments Today
            </p>
          </SummaryWidget>
        ) : null}
        {user_type !== "patient" ? (
          <SummaryWidget>
            <h3>Doctors on Duty</h3>
            <p>
              <span>7</span> Doctors on Duty
            </p>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Last Diagonisis</h3>
            <p>Malaria</p>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Next Appointment</h3>
            <p>23rd June</p>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Last Vitals Checked</h3>
            <ul>
              <li>hieght - 5.2"</li>
              <li>weight - 79kg</li>
              <li>Temperature - 45 &deg; C</li>
              <li>BP - 124/232 bpm</li>
            </ul>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Doctor's Information</h3>
            <p>Name: Dr. Stephen Gerald (M.Med)</p>
            <p>Email: Stephengerald@fmc.com</p>
          </SummaryWidget>
        ) : null}
      </Row>
      <Row>
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Prescription History</h3>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Doctor's Entry</h3>
          </SummaryWidget>
        ) : null}
        {user_type !== "staff" ? (
          <SummaryWidget>
            <h3>Lab Works</h3>
          </SummaryWidget>
        ) : null}
      </Row>
    </Section>
  );
};

export default OverviewContainer;
