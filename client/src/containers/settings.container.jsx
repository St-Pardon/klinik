import { useState } from "react";
import { Fieldset, Form, Input } from "../components/form/form.styled";
import { Section } from "./container.styled";

const SettingsContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Form>
        <Fieldset>
          <label htmlFor="avatar">Change Your Profile Picture</label>
          <Input type="file" name="avatar" id="avatar" />
        </Fieldset>
      </Form>
      <div>
        <p onClick={()=>{setOpen(!open)}}>Reset Password</p>
        <Fieldset style={open ? { display: "flex" } : { display: " none" }}>
          <Input
            type="password"
            name="old_password"
            value={""}
            id="old_password"
            placeholder="Old Password"
          />
          <Input
            type="password"
            name="old_password"
            value={""}
            id="new_password"
            placeholder="New Password"
          />
          <Input
            type="password"
            name="old_password"
            value={""}
            id="confirm_password"
            placeholder="Confirm New Password"
          />
          <Input type="button" value={"Submit"} onClick={() => {}} />
        </Fieldset>
      </div>
    </Section>
  );
};

export default SettingsContainer;
