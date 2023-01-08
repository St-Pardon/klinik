import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useAllStaff } from "../services/queries/req.query";
import { Row, Section, Table, Td, Th, Thead } from "./container.styled";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Icon } from "../components/icon/icon.styled";
import { MdOutlineDeleteForever } from "react-icons/md";
import { handleDelete, handleEdit } from "../services/function/helper.functions";

const StaffContainer = () => {
  const { isLoading, data } = useAllStaff();
  const [edit, setEdit] = useState(false);

  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_staff">
            <Button primary>Register New Staff</Button>
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
              <Th>Reg No</Th>
              <Th>Phone No</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Job Title</Th>
              <Th>User Role</Th>
              <Th>Status</Th>
              {edit && <Th>Edit</Th>}
            </tr>
          </Thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={9}>
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
                  <Td>
                    <Link to={`/dashboard/patient_detail/${item.id}`}>
                      Jon doe
                    </Link>
                  </Td>
                  <Td>S20220000</Td>
                  <Td>08099988899</Td>
                  <Td>doe@abc.com</Td>
                  <Td>27353 levigon avenue</Td>
                  <Td>Doctor</Td>
                  <Td>User</Td>
                  <Td>On duty</Td>
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

export default StaffContainer;
