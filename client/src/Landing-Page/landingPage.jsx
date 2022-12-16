import { Button } from "../components/button/button.styled";
import {
  Footer,
  FooterTop,
  Header,
  HeroContainer,
  HeroPara,
  HeroText,
  Item,
  Li,
  Main,
  Nav,
  Navlink,
  Para,
  Section,
  Service,
  Icon,
  ServicesContainer,
  WhyUs,
} from "./landingPage.styled";
import logoDark from "../assets/logo/klinik-logo-dark.png";
import logoLite from "../assets/logo/klinik-logo-lite.png";
import doc from "../assets/illustration/doctors-illustration.svg";
import img1 from "../assets/images/img1.jpg";
import { Figure, Img } from "../components/img/img.styled";
import {
  FaCommentMedical,
  FaHandHoldingMedical,
  FaNotesMedical,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { SecHeading, SubHeading } from "../components/heading/heading.component";

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
              <Icon service>
                <FaCommentMedical />
              </Icon>
              <SubHeading>Consultation</SubHeading>
              <Para>
                Access doctor via chat or video conference for fantastic
                service.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaHandHoldingMedical />
              </Icon>
              <SubHeading>Counselling</SubHeading>
              <Para>
                One-on-one matching experience to support your well being.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaNotesMedical />
              </Icon>
              <SubHeading>Checkup</SubHeading>
              <Para>
                Keep track of your health to identify stress related dieseas.
              </Para>
            </Service>
          </ServicesContainer>
          <WhyUs>
            <Figure whyus>
              <Img src={img1} alt="doctor showing medical report to patient" />
            </Figure>
            <div>
              <SubHeading>What makes us unique?</SubHeading>
              <ul style={{ padding: "5px 0 15px 0" }}>
                <Li>Top qualified doctors</Li>
                <Li>24/7 customer services</Li>
                <Li>Guaranteed health care</Li>
                <Li>Free consultation</Li>
                <Li>Discount available</Li>
              </ul>
              <Button>Get Started</Button>
            </div>
          </WhyUs>
        </section>
        {/* <section id="doctor">
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
        </section> */}
      </Main>
      <Footer>
        <FooterTop>
          <div>
            <Figure logo>
              <Img src={logoLite} alt="klinik logo lite" />
            </Figure>
            <p style={{ padding: "20px 0" }}>
              Klinik is a MedTech company that is committed to
              <br />
              creating healtier hospital experience for patients
            </p>
            <Button alt>Book Appointment</Button>
          </div>
          <div>
            <h3>Quick Link</h3>
            <nav>
              <Navlink ft href="#home">
                <Item>Home</Item>
              </Navlink>
              <Navlink ft href="#service">
                <Item>Service</Item>
              </Navlink>
              <Navlink ft href="#doctor">
                <Item>Doctor</Item>
              </Navlink>
              <Navlink ft href="#about-us">
                <Item>About Us</Item>
              </Navlink>
              <Navlink ft href="#contact-us">
                <Item>Contact Us</Item>
              </Navlink>
            </nav>
          </div>
          <div>
            <h3>Services</h3>
            <Item>Counselling</Item>
            <Item>Counsulting</Item>
            <Item>Dentistry</Item>
          </div>
          <div>
            <h3>Support</h3>
            <Item>Help center</Item>
            <Item>Terms and Condition</Item>
            <Item>Privacy</Item>
          </div>
          <div>
            <h3>Contact</h3>
            <Navlink ft href="mailto:info@klinik.com">
              <Item>info@klinik.com</Item>
            </Navlink>
            <Navlink ft href="tel:+2348552345678">
              <Item>+234 855 234 5678</Item>
            </Navlink>
            <Item>somewhere in lagos</Item>
            <Item>FAQ</Item>
            <ServicesContainer>
              <Icon ft>
                <TiSocialTwitterCircular />
              </Icon>
              <Icon ft>
                <TiSocialFacebookCircular />
              </Icon>
              <Icon ft>
                <TiSocialLinkedinCircular />
              </Icon>
              <Icon ft>
                <IoLogoInstagram />
              </Icon>
            </ServicesContainer>
          </div>
        </FooterTop>
        <section style={{ textAlign: "center", padding: "10px 0" }}>
          Klinik &copy; 2022. All Right Reversed
        </section>
      </Footer>
    </>
  );
};

export default LandingPage;
