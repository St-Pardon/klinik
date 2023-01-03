import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SubHeading } from "../heading/heading.component";
import { Icon } from "../icon/icon.styled";
import { Figure, TeamContainer } from "./team.styled";

const TeamComponent = () => {
  return (
    <TeamContainer>
      <div>
        <Figure team1></Figure>
        <SubHeading>Onu Onyedikachi</SubHeading>
        <p>Software Engineer - DevOps Expert</p>
        <TeamContainer member>
          <Icon team>
            <a
              href="https://github.com/St-Pardon"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a
              href="https://linkedin.com//in/onyedikachi-onu-374a8512a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin title="Linkedin" />
            </a>
            <a
              href="https://twitter.com/st_Pardon"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter title="Linkedin" />
            </a>
          </Icon>
        </TeamContainer>
      </div>
      <div>
        <Figure team2></Figure>
        <SubHeading>Dawodu Blessing</SubHeading>
        <p>Software Engineer - Frontend Expert</p>
        <TeamContainer member>
          <Icon team>
            <a
              href="https://github.com/DammyD"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin title="Linkedin" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter title="Linkedin" />
            </a>
          </Icon>
        </TeamContainer>
      </div>
      <div>
        <Figure team3></Figure>
        <SubHeading>Kusimo Yusuf</SubHeading>
        <p>Software Engineer - Backend Expert</p>
        <TeamContainer member>
          <Icon team>
            <a
              href="https://github.com/standardforever"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a href="https://linkedin.com/in/yusuf-kusimo-768b6a213" target="_blank" rel="noreferrer">
              <FaLinkedin title="Linkedin" />
            </a>
            <a href="https://twitter.com/ArtByYUSUF" target="_blank" rel="noreferrer">
              <FaTwitter title="Linkedin" />
            </a>
          </Icon>
        </TeamContainer>
      </div>
    </TeamContainer>
  );
};

export default TeamComponent;
