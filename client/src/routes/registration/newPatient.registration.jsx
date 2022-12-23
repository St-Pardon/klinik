import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Button } from "../../components/button/button.styled";
import { Fieldset, Form, Input } from "../../components/form/form.styled";
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
          {/* 
            {" "}
            <Button type="btn">
              <MdKeyboardBackspace
                style={{ fontSize: "1.8rem", color: "black" }}
              />{" "}
              Back
            </Button>
           */}
        </Fieldset>
        <Input submit type="submit" value="Submit" />
      </Form>
    </Section>
  );
};

export default NewPatientContainer;
