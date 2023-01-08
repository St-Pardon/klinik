import React from "react";
import { MdEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../components/button/button.styled";
import { DataTable } from "../components/Loader/loaders";
import { useDrugData } from "../services/queries/req.query";
import { Row, Section, Table, Th, Thead } from "./container.styled";

const DrugContainer = () => {
  const { isLoading, data } = useDrugData();

  return (
    <Section>
      <Row right>
        <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
          <Link to="/dashboard/new_drug">
            <Button primary>Add new drug</Button>
          </Link>
          <Button>
            <MdEditNote /> Edit
          </Button>
        </div>
      </Row>
      <Row>
        <Table>
          <Thead>
            <tr>
              <Th>S/N</Th>
              <Th>Name</Th>
              <Th>Manufactured Date</Th>
              <Th>Expiry Date</Th>
              <Th>Nafdac Approved</Th>
              <Th>Quantity</Th>
              <Th>Price per unit</Th>
              <Th>Serial Number</Th>
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
                    <Link to="/dashboard/drug_detail">Paracetamol</Link>
                  </td>
                  <td>08/2020</td>
                  <td>12/2024</td>
                  <td>true</td>
                  <td>1000</td>
                  <td>250 NGN</td>
                  <td>232464657DSB6392</td>
                </tr>
              ))
            )}
            <tr>
              <td>2</td>
              <td>
                <Link to="/dashboard/drug_detail">Amateen</Link>
              </td>
              <td>08/2017</td>
              <td>12/2023</td>
              <td>false</td>
              <td>730</td>
              <td>600 NGN</td>
              <td>275464657DSB6392</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Link to="/dashboard/drug_detail">Folic Acid</Link>
              </td>
              <td>02/2020</td>
              <td>10/2024</td>
              <td>1070</td>
              <td>350 NGN</td>
              <td>976DCD7DSB6392</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Section>
  );
};

export default DrugContainer;
