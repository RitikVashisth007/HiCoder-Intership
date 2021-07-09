import styled from 'styled-components'
import BlueBg from '../../assets/blue-shape.png'

export const MainContainer = styled.div`
    background: url(${BlueBg});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 5px;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 750px) {
        background: #1c3988;
        flex-wrap: wrap;
    }
`

export const ItemConatiner = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    img{
        width: 70px;
        height: 70px;
        
    }
    color: white;
    p{
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        text-align:center;
        margin-top: 15px;

    }
    .number-data{
        font-size: 40px;
        font-weight: 700;
    }

    @media only screen and (max-width: 750px) {
        min-width: 250px;

    }

`