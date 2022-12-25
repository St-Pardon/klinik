import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  SecHeading,
  SubHeading,
} from "../../components/heading/heading.component";
import { Figure, Img } from "../../components/img/img.styled";
import { Section } from "../../containers/container.styled";
// import avi from '../../assets/images/user-avatar.png'
import avi from "../../assets/images/img1.jpg";
import { Banner, Div, Para, Record, Span } from "./detail.style";

const PatientDetail = () => {
  return (
    <Section detail>
      <Banner>
        <Link to="/dashboard/patients">
          {" "}
          <MdKeyboardBackspace style={{ fontSize: "1.8rem", color: "black" }} />
        </Link>
      </Banner>
      <Div banner>
        <Figure detail>
          <Img src={avi} alt="user's avatar" />
        </Figure>
        <div>
          <div>
            <h2>John Doe</h2>
            <SubHeading bio>P2022163823</SubHeading>
          </div>
          <Div bio>
            <div>
              <a href="mailto:johndoe@gmail.com">
                <SubHeading bio>johndoe@gmail.com</SubHeading>
              </a>
              <a href="tel:+234809237289">
                <SubHeading bio>+234 8092 37289</SubHeading>
              </a>
              <SubHeading bio>Blood Group: O+</SubHeading>
              <SubHeading bio>Genotype: AS</SubHeading>
              <SubHeading bio>Allegies: Penicillin</SubHeading>
            </div>
            <div>
              <SubHeading bio>Status: Not Admitted</SubHeading>
              <SubHeading bio>Next Appointment: 23rd June 2022</SubHeading>
              <SubHeading bio>Disability: Nill</SubHeading>
              <SubHeading bio>Chronic Illness: AVN</SubHeading>
            </div>
          </Div>
        </div>
      </Div>
      <hr />
      <Record>
        <SecHeading>Record for 20th June 2021</SecHeading>
        <Div record>
          <SubHeading bio>Vitals</SubHeading>
          <div>
            <Para>
              Weight: <em>83KG</em>
            </Para>
            <Para>
              Height: <em>--</em>
            </Para>
            <Para>
              Blood Pressure: <em>123/89bpm</em>
            </Para>
            <Para>
              Body Temperature: <em>32&deg;C</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Records</SubHeading>
          <div>
            <Para>
              Symptoms: <em>Headache, Sore throat</em>
            </Para>
            <Para>
              Diagnosis: <em>Malaria</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Lab work</SubHeading>
          <div>
            <Para>
              Test: <em>hpv test</em>
            </Para>
            <Para>
              Result: <em>+ive</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Prescriptons</SubHeading>
          <Div bio>
            <div>
              <Para>
                Medication: <em>Vitamin C</em>
              </Para>
              <Para>Dosage: <em>1 tab 2 times daily</em></Para>
            </div>
            <div>
              <Para>
                Medication: <em>Folic acid</em>
              </Para>
              <Para>
                Dosage: <em>1 tab daily</em>
              </Para>
            </div>
          </Div>
        </Div>
        <Div record>
          <SubHeading bio>Comments</SubHeading>
          <div>
            <Para comment>
              <Span>Nurse's Comment:</Span> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aliquam, distinctio eos cum tenetur velit nulla
              dolores labore totam nesciunt, ipsum nobis porro consequuntur
              molestias saepe voluptatem hic id, vero odio!
            </Para>
            <Para comment>
              <Span>Doctor's Comment:</Span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non eos soluta voluptatem itaque vel neque
              laboriosam dolores molestiae quod fuga suscipit qui a architecto,
              veritatis quidem, aspernatur mollitia, id dolore.
            </Para>
            <Para comment>
              <Span>Biochemist's Comment:</Span> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quos quis perspiciatis tempore ipsam eaque autem
              magni labore rem beatae explicabo, doloremque pariatur qui? Fugiat
              doloremque maxime suscipit similique. Incidunt, ratione!
            </Para>
            <Para comment>
              <Span>Pharmasist's Comment:</Span> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptate voluptates, perferendis nostrum hic
              repellat ut fugiat quam sequi in laboriosam tenetur deserunt
              tempora numquam quis explicabo et illum necessitatibus alias?
            </Para>
          </div>
        </Div>
      </Record>
      <Record>
        <SecHeading>Record for 11th September 2018</SecHeading>
        <Div record>
          <SubHeading bio>Vitals</SubHeading>
          <div>
            <p>
              Weight: <em>83KG</em>
            </p>
            <Para>
              Height: <em>--</em>
            </Para>
            <Para>
              Blood Pressure: <em>123/89bpm</em>
            </Para>
            <Para>
              Body Temperature: <em>32&deg;C</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Records</SubHeading>
          <div>
            <Para>
              Symptoms: <em>Headache, Sore throat</em>
            </Para>
            <Para>
              Diagnosis: <em>Malaria</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Lab work</SubHeading>
          <div>
            <Para>
              Test: <em>hpv test</em>
            </Para>
            <Para>
              Result: <em>+ive</em>
            </Para>
          </div>
        </Div>
        <Div record>
          <SubHeading bio>Prescriptons</SubHeading>
          <Div bio>
            <div>
              <Para>
                Medication: <em>Vitamin C</em>
              </Para>
              <Para>Dosage: <em>1 tab 2 times daily</em></Para>
            </div>
            <div>
              <Para>
                Medication: <em>Folic acid</em>
              </Para>
              <Para>
                Dosage: <em>1 tab daily</em>
              </Para>
            </div>
          </Div>
        </Div>
        <Div record>
          <SubHeading bio>Comments</SubHeading>
          <div>
            <Para comment>
              <Span>Nurse's Comment:</Span> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aliquam, distinctio eos cum tenetur velit nulla
              dolores labore totam nesciunt, ipsum nobis porro consequuntur
              molestias saepe voluptatem hic id, vero odio!
            </Para>
            <Para comment>
              <Span>Doctor's Comment:</Span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non eos soluta voluptatem itaque vel neque
              laboriosam dolores molestiae quod fuga suscipit qui a architecto,
              veritatis quidem, aspernatur mollitia, id dolore.
            </Para>
            <Para comment>
              <Span>Biochemist's Comment:</Span> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quos quis perspiciatis tempore ipsam eaque autem
              magni labore rem beatae explicabo, doloremque pariatur qui? Fugiat
              doloremque maxime suscipit similique. Incidunt, ratione!
            </Para>
            <Para comment>
              <Span>Pharmasist's Comment:</Span> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptate voluptates, perferendis nostrum hic
              repellat ut fugiat quam sequi in laboriosam tenetur deserunt
              tempora numquam quis explicabo et illum necessitatibus alias?
            </Para>
          </div>
        </Div>
      </Record>
    </Section>
  );
};

export default PatientDetail;
