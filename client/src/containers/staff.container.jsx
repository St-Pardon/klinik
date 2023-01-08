import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useAllStaff } from "../services/queries/req.query";
// import SummaryWidget from "../components/widgets/summary.widget";
import { Row, Section, Table, Th, Thead } from "./container.styled";

const StaffContainer = () => {
  const { isLoading, data } = useAllStaff();
  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_staff">
            <Button primary>Register New Staff</Button>
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
              <Th>Reg No</Th>
              <Th>Phone No</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Job Title</Th>
              <Th>User Role</Th>
              <Th>Status</Th>
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
                    <Link to={`/dashboard/patient_detail/${item.id}`}>Jon doe</Link>
                  </td>
                  <td>S20220000</td>
                  <td>08099988899</td>
                  <td>doe@abc.com</td>
                  <td>27353 levigon avenue</td>
                  <td>Doctor</td>
                  <td>User</td>
                  <td>On duty</td>
                </tr>
              ))
            )}
            {/* <tr>
              <td>2</td>
              <td>
                <Link to="/dashboard/staff_detail">Diana Prince</Link>
              </td>
              <td>S202200001</td>
              <td>08099112343</td>
              <td>diana@abc.com</td>
              <td>27 kings avenue</td>
              <td>Nurse</td>
              <td>Admin</td>
              <td>Off Duty</td>
            </tr> */}
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default StaffContainer;
