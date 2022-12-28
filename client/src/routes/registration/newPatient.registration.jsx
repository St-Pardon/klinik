import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Button } from "../../components/button/button.styled";
import { Fieldset, Form, Input, Select } from "../../components/form/form.styled";
import { Section } from "../../containers/container.styled";

const NewPatientContainer = () => {
  return (
    <Section>
      <Form>
        <Link to="/dashboard/patients">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
        <p>Kindly fill in the patient's details</p>

        <Fieldset>
          <label htmlFor="first_name">First Name:</label>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="e.g: John"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="last_name">Last Name:</label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="e.g: Doe"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="e.g: someone@example.com"
          />
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
          <Input
            type="numeric"
            id="phone"
            name="phone"
            placeholder="eg: +234 8082 5555 777"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="eg: 123 pyper avenue"
          />
        </Fieldset>
        <Fieldset>
          <label htmlFor="blood_group">Blood Group:</label>
          <Select name="blood_group" id="blood_group">
            <option value="" selected disabled>
              - - - Select Patient's Blood Group - - - 
            </option>
            <option value="O Positive">O+</option>
            <option value="O Negative">O-</option>
            <option value="A Positive">A+</option>
            <option value="A Negative">A-</option>
            <option value="AB Positive">AB+</option>
          </Select>
        </Fieldset>
        <Fieldset>
          <label htmlFor="genotype">Genotype:</label>
          <Select name="genotype" id="genotype">
            <option value="" selected disabled>
              - - - Select Patient's Genotype - - - 
            </option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="AC">AC</option>
            <option value="SS">SS</option>
            <option value="SC">SC+</option>
          </Select>
        </Fieldset>
        <Fieldset>
          <label htmlFor="disability">Disability:</label>
          <Input type="text" id="disability" name="disability" />
        </Fieldset>
        <Fieldset>
          <label htmlFor="chronic_disease">Chronic Disease:</label>
          <Input type="text" id="chronic_disease" name="chronic_disease" />
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
          <label htmlFor="nok_relationship">
            Relationship with Next of Kin:
          </label>
          <Input type="text" id="nok_relationship" name="nok_relationship" />
        </Fieldset>
        <Fieldset>
          <Input submit type="submit" value="Submit" />
        </Fieldset>
      </Form>
    </Section>
  );
};

export default NewPatientContainer;
