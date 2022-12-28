import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Section } from '../../containers/container.styled';

const StaffDetail = () => {
  return (
    <Section>
      <Link to="/dashboard/patients">
        {" "}
        <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
      </Link>
      StaffDetail
    </Section>
  );
}

export default StaffDetail