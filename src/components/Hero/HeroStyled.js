import styled from 'styled-components'
import Background from '../../assets/hero.jpg'

export const MainContainer = styled.div`
    background-image:url(${Background});
    width: 100%;
    height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top:50px;
    
    @media only screen and (max-width: 750px) {
        background-position: left;

    }
`

export const HeroDetails = styled.div`
    max-width: 620px;
    padding-top:25vh;
    padding-left: 5vw;
    h2{
        font-size: 50px;
        line-height: 60px;
        font-weight: 800;
        color: #0c121d;
    }
    p{
        font-size: 13px;
        line-height: 24px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        
        color: #1c3988;
    }
    button{
        padding: 16px 55px;
        font-size: 14px;
        letter-spacing: 1px;
        border: 2px solid #1c3988;
        color: #1c3988;
        text-transform: uppercase;
        font-weight: 700;
        background: transparent;
        border-radius: 6px;
        margin-top: 35px;
        :hover{
            background-color:#1c3988;
            color:white;
        }
    }
`

