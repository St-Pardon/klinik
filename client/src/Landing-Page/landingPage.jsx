import React from 'react';
import { GetStated, Header, Main, Nav } from './landingPage.styled';

const LandingPage = () => {
  return (
    <>
      <Header>
        <h2>Klinik</h2>
        <Nav>
          <a href="#home">
            <h4>Home</h4>
          </a>
          <a href="#service">
            <h4>Service</h4>
          </a>
          <a href="#doctor">
            <h4>Doctor</h4>
          </a>
          <a href="#about-us">
            <h4>About Us</h4>
          </a>
          <a href="#contact-us">
            <h4>Contact Us</h4>
          </a>
          <GetStated>Get Stated</GetStated>
        </Nav>
      </Header>
      <Main>
        <section>
          <div>
            <h3>Consult A Doctor, Anytime Anywhere</h3>
            <p>Creating healtier hospital for patients in Africa and beyond.</p>
            <div>
              <button>Book Appointment</button>
              <a href="#">
                <p>Learn more</p>
              </a>
            </div>
          </div>
          <figure></figure>
        </section>
        <section>
          <h3 id="service">Our Services</h3>
          <div>
            <h4>Consultation</h4>
            <p>
              Access doctor via chat or video conference for fantastic service.
            </p>
          </div>
          <div>
            <h4>Counselling</h4>
            <p>One-on-one matching experience to support your well being.</p>
          </div>
          <div>
            <h4>Checkup</h4>
            <p>Keep track of your health to identify stress related dieseas.</p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default LandingPage;
