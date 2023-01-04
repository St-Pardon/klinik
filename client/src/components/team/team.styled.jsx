import styled, {css} from 'styled-components';
import img1 from "../../assets/team/pardon_techshot.jpeg";
import img2 from "../../assets/team/dammy_techshot.png";
import img3 from "../../assets/team/yusuf_techshot.png";

export const TeamContainer = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
`

export const Figure = styled.figure`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;

  ${(props) => props.team1 && css`
    background: url(${img1});
  `}

  ${(props) => props.team2 && css`
    background-image: url(${img2});
  `}
  
  ${(props) => props.team3 && css`
    background-image: url(${img3});
  `}
  background-position: center;
  background-size: cover;
`;
