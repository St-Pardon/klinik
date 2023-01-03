import React from 'react'
import { Fieldset, Form, Input } from '../components/form/form.styled';
import { Section } from './container.styled'

const SettingsContainer = () => {
  return (
    <Section>
        <Form>
          <Fieldset>
            <label htmlFor="avatar">Change Your Profile Picture</label>
            <Input type="file" name='avatar' id='avatar'/>
          </Fieldset>
        </Form>
    </Section>
  )
}

export default SettingsContainer;