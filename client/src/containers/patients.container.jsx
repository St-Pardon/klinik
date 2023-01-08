import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useAllPatient } from "../services/queries/req.query";
import { Row, Section, Table, Td, Th, Thead } from "./container.styled";
import { handleDelete, handleEdit } from "../services/function/helper.functions";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Icon } from "../components/icon/icon.styled";
import { MdOutlineDeleteForever } from "react-icons/md";

const PatientsContainer = () => {
  const { isLoading, data } = useAllPatient();
  const [edit, setEdit] = useState(false);

  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_patient">
            <Button primary>Add new patient</Button>
          </Link>
          <Button onClick={() => handleEdit(setEdit, edit)}>
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
              {edit && <Th>Edit</Th>}
            </tr>
          </Thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={10}>
                  <DataTable />
                </td>
              </tr>
            ) : (
              data?.map((item, i) => (
                <tr
                  key={i}
                  style={i % 2 === 0 ? { backgroundColor: "#f4f4f4" } : {}}
                >
                  <Td>{i + 1}</Td>
                  <Td style={{ color: "skyblue" }}>
                    <Link to={`/dashboard/profile_detail/${item.id}`}>
                      {item.first_name} {item.last_name}
                    </Link>
                  </Td>
                  <Td>{item.file_no}</Td>
                  <Td>{item.address}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.address}</Td>
                  <Td>12 June 2022</Td>
                  <Td>Dr. Joseph Pope</Td>
                  <Td>Jane Doe</Td>
                  <Td>08027162632</Td>
                  {edit && (
                    <Td>
                      <Icon edit>
                        <Link to={`/edit/:${item.id}`}>
                          {" "}
                          <HiOutlinePencilAlt />
                        </Link>{" "}
                        <MdOutlineDeleteForever
                          onClick={() => {handleDelete(item.id)}}
                          style={{ color: "red" }}
                        />
                      </Icon>
                    </Td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default PatientsContainer;
