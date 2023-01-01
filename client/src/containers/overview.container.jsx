import React from "react";
import { SubHeading } from "../components/heading/heading.component";
import Record from "../components/record/record.component";
import SummaryWidget from "../components/widgets/summary.widget";
import { Section, Row, Ul } from "./container.styled";

const OverviewContainer = ({ job_type, user_type }) => {
  return (
    <Section>
      <Row>
        
          {/*----- widgets for patients ----- */}
          {user_type === "patient" ? (
            <SummaryWidget>
              <SubHeading widget>Last Diagonisis</SubHeading>
              <p>Malaria</p>
            </SummaryWidget>
          ) : null}
          {user_type === "patient" ? (
            <SummaryWidget>
              <SubHeading>Next Appointment</SubHeading>
              <p>23rd June</p>
            </SummaryWidget>
          ) : null}
          {user_type === "patient" ? (
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
          {user_type === "patient" ? (
            <SummaryWidget>
              <SubHeading>Doctor's Information</SubHeading>
              <p>Name: Dr. Stephen Gerald (M.Med)</p>
              <p>Email: Stephengerald@fmc.com</p>
            </SummaryWidget>
          ) : null}
        

        {/* ----- widgets for Nurses ----- */}
        {user_type === "staff" && job_type === "nurse" ? (
          <SummaryWidget>
            <SubHeading>Appointment Today</SubHeading>
            <p>
              <span>127</span> Appointments
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "nurse" ? (
          <SummaryWidget>
            <SubHeading>Doctors on Duty</SubHeading>
            <p>
              <span>7</span> Doctors
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" &&
        (job_type === "nurse" || job_type === "doctor") ? (
          <SummaryWidget>
            <SubHeading>Patients Admitted</SubHeading>
            <p>
              <span>14</span> Patients
            </p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" &&
        (job_type === "nurse" || job_type === "doctor") ? (
          <SummaryWidget>
            <SubHeading>Processed Patients</SubHeading>
            <Ul>
              <li>John Snow</li>
              <li>Tormound Gaintsbane</li>
              <li>Bruce Wayne</li>
              <li>Chole Sullivan</li>
            </Ul>
          </SummaryWidget>
        ) : null}

        {/* Tiles for Pharamsist  */}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>About to Expire</SubHeading>
            <p>None</p>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Needs Restocking</SubHeading>
            <Ul>
              <li>B Complex</li>
              <li>Paracetamol</li>
              <li>Descovite</li>
              <li>Cellgivity</li>
              <li>Folic Acid</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Patient's Pickup</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>
              <li>Michael Issac - P2022000087</li>
              <li>Ejike Osuawku - P2022000011</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "pharmasist" ? (
          <SummaryWidget>
            <SubHeading>Something</SubHeading>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "chemist" ? (
          <SummaryWidget>
            <SubHeading>Sample Collection</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>
              <li>Michael Issac - P2022000087</li>
              <li>Ejike Osuawku - P2022000011</li>
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "chemist" ? (
          <SummaryWidget>
            <SubHeading>Results to Dispatch</SubHeading>
            <Ul>
              <li>John Akanimoh - P202200072</li>
              <li>Tracy Murphy - P2022000876</li>
              <li>Funsho Akerele - P2022000725</li>            
            </Ul>
          </SummaryWidget>
        ) : null}
        {user_type === "staff" && job_type === "chemist" ? (
          <SummaryWidget>
            <SubHeading>Processing</SubHeading>
            <p>None</p>
          </SummaryWidget>
        ) : null}
      </Row>
          {user_type === "patient" ? <Record /> : null}

      {/* <Row>
        {job_type !== "staff" ? (
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
        {job_type !== "staff" ? (
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
        {job_type !== "staff" ? (
          <SummaryWidget>
            <SubHeading>Lab Works</SubHeading>
          </SummaryWidget>
        ) : null}
      </Row> */}
      {/* <div>
        <h4>12th January 2022</h4>
        <div>
          <p>
            <span>Symptoms:</span> Headache, Sores, Nauseous
          </p>
          <p>
            <span>Diagnosis:</span> Typhord Fever
          </p>
          <p>
            <span>Doctors Comment:</span> Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Laborum dicta adipisci accusantium
            deserunt doloremque odio quasi voluptas, excepturi iusto dolores
            debitis corrupti distinctio quo similique aspernatur sapiente
            molestias eveniet ipsa.
          </p>
        </div>
        <div>
          <h4>Prescriptions</h4>
          <p>
            <span>Drug:</span> Paracetamol
          </p>
          <p>
            <span>Dosage:</span> 2 tabs 3 times daily
          </p>
        </div>
        <div>
          <h4>Lab works</h4>
          <p>
            <span>Test:</span> Covid
          </p>
          <p>
            <span>Result:</span> -ive
          </p>
        </div>
      </div> */}
    </Section>
  );
};

export default OverviewContainer;
