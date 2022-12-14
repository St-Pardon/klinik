import { Button } from "../components/button/button.styled";
import { Header, Main, Nav } from "./landingPage.styled";

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
          <Button primary>Get Started</Button>
        </Nav>
      </Header>
      <Main>
        <section id="home">
          <div>
            <h3>Consult A Doctor, Anytime Anywhere</h3>
            <p>Creating healtier hospital for patients in Africa and beyond.</p>
            <div>
              <Button primary>Book Appointment</Button>
              <a href="##">
                <p>Learn more</p>
              </a>
            </div>
          </div>
          <figure></figure>
        </section>
        <section id="service">
          <h3>Our Services</h3>
          <div>
            <div>
              <h4>Consultation</h4>
              <p>
                Access doctor via chat or video conference for fantastic
                service.
              </p>
            </div>
            <div>
              <h4>Counselling</h4>
              <p>One-on-one matching experience to support your well being.</p>
            </div>
            <div>
              <h4>Checkup</h4>
              <p>
                Keep track of your health to identify stress related dieseas.
              </p>
            </div>
          </div>
          <div>
            <figure></figure>
            <div>
              <h4>What makes us unique?</h4>
              <ul>
                <li>Top qualified doctors</li>
                <li>24/7 customer services</li>
                <li>Guaranteed health care</li>
                <li>Free consultation</li>
                <li>Discount available</li>
              </ul>
              <Button>Get Started</Button>
            </div>
          </div>
        </section>
        <section id="doctor">
          <div>
            <div>
              <h3>Meet our Doctors</h3>
              <p>
                Start an online conversation with a using an end-to-end
                encrypted platform
              </p>
              <Button primary>Start a conversation</Button>
            </div>
            <div>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
          </div>
          <div>
            <h3>Hear from our patients</h3>
            <div>
              <ul>
                <li>
                  <div></div>
                  <div>
                    <figure></figure>
                    <div>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Veniam minima fugit dignissimos. Fugiat, quos.
                        Ipsum illum vitae amet dicta officia sapiente
                        consequatur placeat, repellendus ducimus eum fugiat
                        numquam quisquam nihil.
                      </p>
                      <h4>Diane Simmens</h4>
                      <p>Pharmasist</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Main>
      <footer>
        <section>
          <div>
            <h2>Klinik</h2>
            <p>
              Klinik is a MedTech company that is committed to creating healtier
              hospital experience for patients
            </p>
            <Button>Book Appointment</Button>
          </div>
          <div>
            <h3>Quick Link</h3>
            <nav>
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
            </nav>
          </div>
          <div>
            <h3>Services</h3>
            <p>Counselling</p>
            <p>Counsulting</p>
            <p>Dentistry</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Help center</p>
            <p>Terms and Condition</p>
            <p>Privacy</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>info@klinik.com</p>
            <p>+234 855 234 5678</p>
            <p>somewhere in lagos</p>
            <p>FAQ</p>
            <div></div>
          </div>
        </section>
        <section>Klinik &copy; 2022. All Right Reversed</section>
      </footer>
    </>
  );
};

export default LandingPage;
