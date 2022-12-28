import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fieldset, Form, Input, Select } from "../../components/form/form.styled";

const NewStaffContainer = () => {
  return (
    <Form>
      <Link to="/dashboard/staff">
        {" "}
        <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
      </Link>
      <p>Fill in the staff informations</p>
      <Fieldset>
        <label htmlFor="first_name">First Name:</label>
        <Input type="text" id="first_name" name="first_name" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="last_name">Last Name:</label>
        <Input type="text" id="last_name" name="last_name" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="sex">Sex:</label>
        <Select name="sex" id="sex">
          <option value="" selected disabled>
            - - - Select Patient's Sex - - -
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Non Binary">Non Binary</option>
          <option value="others">Others</option>
        </Select>
      </Fieldset>
      <Fieldset>
        <label htmlFor="phone">Phone No:</label>
        <Input type="text" id="phone" name="phone" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="email">Email:</label>
        <Input type="text" id="email" name="email" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="address">Address:</label>
        <Input type="text" id="address" name="address" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="job_title">Job Title:</label>
        <Input type="text" id="job_title" name="job_title" placeholder="" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="nok">Next of Kin:</label>
        <Input type="text" id="nok" name="nok" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="nok_phone">Next of Kin Phone No:</label>
        <Input type="numeric" id="nok_phone" name="nok_phone" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="nok_address">Next of Kin Address:</label>
        <Input type="text" id="nok_address" name="nok_address" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="nok_relationship">Relationship with Next of Kin:</label>
        <Input type="text" id="nok_relationship" name="nok_relationship" />
      </Fieldset>
      <Fieldset>
        <Input submit type="submit" value="Submit" />
      </Fieldset>
    </Form>
  );
};

export default NewStaffContainer;
