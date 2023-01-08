import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useAllPatient } from "../services/queries/req.query";
// import SummaryWidget from "../components/widgets/summary.widget";
import { Row, Section, Table, Th, Thead } from "./container.styled";

const PatientsContainer = () => {
  const { isLoading, data } = useAllPatient();
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
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Last Checkup</Th>
              <Th>Primary Doctor</Th>
              <Th>Next of Kin</Th>
              <Th>Next of Kin Contact</Th>
            </tr>
          </Thead>
          <tbody>
            {isLoading ? (
              <DataTable />
            ) : (
              data?.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <Link to={`/dashboard/profile_detail/${item.id}`}>
                      {item.first_name} {item.last_name}
                    </Link>
                  </td>
                  <td>{item.file_no}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>12 June 2022</td>
                  <td>Dr. Joseph Pope</td>
                  <td>Jane Doe</td>
                  <td>08027162632</td>
                </tr>
              ))
            )}
            {/* <tr>
              <td>2</td>
              <td>
                <Link to="/dashboard/patient_detail">Mike Tyson</Link>
              </td>
              <td>P2022000001</td>
              <td>08099988563</td>
              <td>tyson@abc.com</td>
              <td>5 jojoba street</td>
              <td>1 Sept 2022</td>
              <td>Dr. Emmanuel Price</td>
              <td>Jane Tyson</td>
              <td>08027162689</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tim crook</td>
              <td>P202200003</td>
              <td>0809998962</td>
              <td>tim@abc.com</td>
              <td>43 papi street</td>
              <td>11 Dec 2022</td>
              <td>Dr. Mike Henry</td>
              <td>Jane Henry</td>
              <td>08027162612</td>
            </tr> */}
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default PatientsContainer;
