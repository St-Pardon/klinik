import React from 'react'
import {  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SubHeading } from '../heading/heading.component'
import {Icon} from '../icon/icon.styled'


const TeamComponent = () => {
  return (
    <div>
        <div>
            <figure><img src="" alt="Team member" /></figure>
            <SubHeading>Onu Onyedikachi</SubHeading>
            <p></p>
            <Icon><a href="https://github.com/"><FaGithub title='Github' /></a></Icon>
            <Icon><a href="https://linkedin.com/"><FaLinkedin title='Linkedin' /></a></Icon>
            <Icon><a href="https://twitter.com/"><FaTwitter title='Linkedin' /></a></Icon>
        </div>
        <div>
            <figure><img src="" alt="Team member" /></figure>
            <SubHeading>Dawodu Blessing</SubHeading>
            <p></p>
            <Icon><a href="https://github.com/"><FaGithub title='Github' /></a></Icon>
            <Icon><a href="https://linkedin.com/"><FaLinkedin title='Linkedin' /></a></Icon>
            <Icon><a href="https://twitter.com/"><FaTwitter title='Linkedin' /></a></Icon>
        </div>
        <div>
            <figure><img src="" alt="Team member" /></figure>
            <SubHeading>Kusimo Yusuff</SubHeading>
            <p></p>
            <Icon><a href="https://github.com/"><FaGithub title='Github' /></a></Icon>
            <Icon><a href="https://linkedin.com/"><FaLinkedin title='Linkedin' /></a></Icon>
            <Icon><a href="https://twitter.com/"><FaTwitter title='Linkedin' /></a></Icon>
        </div>
    </div>
  )
}

export default TeamComponent