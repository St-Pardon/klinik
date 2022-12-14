import { Button } from "../components/button/button.styled";
import {
  Header,
  HeroContainer,
  HeroPara,
  HeroText,
  Main,
  Nav,
  Navlink,
  Para,
  SecHeading,
  Section,
  Service,
  ServiceIcon,
  ServicesContainer,
  SubHeading,
} from "./landingPage.styled";
import logoDark from "../assets/logo/klinik-logo-dark.png";
import logoLite from "../assets/logo/klinik-logo-lite.png";
import doc from "../assets/illustration/doctors-illustration.svg";
import { Figure, Img } from "../components/img/img.styled";
import {
  FaCommentMedical,
  FaHandHoldingMedical,
  FaNotesMedical,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <Header>
        <Figure logo>
          <Img src={logoDark} alt="Klinik logo dark" />
        </Figure>
        <Nav>
          <Navlink href="#home">
            <p>Home</p>
          </Navlink>
          <Navlink href="#service">
            <p>Service</p>
          </Navlink>
          <Navlink href="#doctor">
            <p>Doctor</p>
          </Navlink>
          <Navlink href="#about-us">
            <p>About Us</p>
          </Navlink>
          <Navlink href="#contact-us">
            <p>Contact Us</p>
          </Navlink>
          <Button primary>Get Started</Button>
        </Nav>
      </Header>
      <Main>
        <Section home id="home">
          <div>
            <HeroText>
              Consult A Doctor,
              <br />
              Anytime Anywhere
            </HeroText>
            <HeroPara>
              Creating healtier hospital for patients in Africa and beyond.
            </HeroPara>
            <HeroContainer>
              <Button primary>Book Appointment</Button>
              <a href="##">
                <p>Learn more</p>
              </a>
            </HeroContainer>
          </div>
          <Figure hero>
            <Img src={doc} alt="undraw doctor illustration" />
          </Figure>
        </Section>
        <section id="service">
          <SecHeading service>Our Services</SecHeading>
          <ServicesContainer>
            <Service>
              <ServiceIcon>
                <FaCommentMedical />
              </ServiceIcon>
              <SubHeading>Consultation</SubHeading>
              <Para>
                Access doctor via chat or video conference for fantastic
                service.
              </Para>
            </Service>
            <Service>
              <ServiceIcon>
                <FaHandHoldingMedical />
              </ServiceIcon>
              <SubHeading>Counselling</SubHeading>
              <Para>
                One-on-one matching experience to support your well being.
              </Para>
            </Service>
            <Service>
              <ServiceIcon><FaNotesMedical /></ServiceIcon>
              <SubHeading>Checkup</SubHeading>
              <Para>
                Keep track of your health to identify stress related dieseas.
              </Para>
            </Service>
          </ServicesContainer>
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
            <figure>
              <img src={logoLite} alt="klinik logo lite" />
            </figure>
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
