import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
// import SummaryWidget from "../components/widgets/summary.widget";
import { Row, Section, Table, Th, Thead } from "./container.styled";

const PatientsContainer = () => {
  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_patient">
            <Button primary>Add new patient</Button>
          </Link>
          <Button>
            <FaUserEdit /> Edit
          </Button>
        </div>
      </Row>
      <Row>
        <Table>
          <Thead>
            <tr>
              <Th>S/N</Th>
              <Th>Name</Th>
              <Th>File No</Th>
              <Th>Phone No</Th>
              <Th>Address</Th>
              <Th>Last Checkup</Th>
              <Th>Primary Doctor</Th>
              <Th>Next of Kin</Th>
              <Th>Next of Kin Contact</Th>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Link to='/dashboard/patient_detail'>Jon doe</Link></td>
              <td>P20220980</td>
              <td>08099988899</td>
              <td>doe@abc.com</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jon doe</td>
              <td>P20220980</td>
              <td>08099988899</td>
              <td>doe@abc.com</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jon doe</td>
              <td>P20220980</td>
              <td>08099988899</td>
              <td>doe@abc.com</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default PatientsContainer;
