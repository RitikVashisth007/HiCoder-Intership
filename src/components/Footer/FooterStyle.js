import styled from 'styled-components'
import FooterImage from '../../assets/footer.jpg'


export const MainContainer = styled.div`
    background-image: url(${FooterImage});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 60px;
    

`


export const MoreInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 3px solid lightgrey;
    padding-bottom: 60px;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;

    }


`
export const About = styled.div`
    max-width: 33%;
    img{
        width: 120px;
        padding-bottom: 40px;
        padding-top: 70px;
    }
    p{
        padding: 10px;
        color: #333;
        margin: 0 0 26px;
        line-height: 1.7;
        font-weight: 400;
        font-size: 16px;
    }

    button{
            border: none;
            border-radius: 3px;
            display: inline-block;
            text-transform: uppercase;
            font-size: 16px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            color: #ffffff;
            background: #1c3988;
            transition: all 0.3s ease;
            padding: 13px 32px;
            margin-top: 28px;
        }
        @media only screen and (max-width: 850px) {
            max-width: 100%;
            padding: 10px 25px;
        }
    
`
export const Info = styled.div`
    cursor: pointer;
    h3{
        padding-bottom: 40px;
        padding-top: 70px;
        color: #1c3988;
        font-size: 24px;
    }
    ul{
        list-style:none;
        margin: 0 0 26px;
    }
    li{
        color: #333;
        
        line-height: 1.7;
        font-weight: 400;
        font-size: 16px;
        padding-bottom: 6px;
    }
    @media only screen and (max-width: 850px) {
            width: 100%;
            h3{
                margin-left: 50px;
            }
            ul{
                margin-left: 50px;
            }
        }
    
`
export const Contact = styled.div`
    h3{
        padding-bottom: 40px;
        padding-top: 70px;
        color: #1c3988;
        font-size: 24px;
    }
    flex: 0 0 33.333333%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 850px) {
            max-width: 100%;
            padding: 10px 25px;
        }
    a{
        font-size: 15px;
        color: #333;
        text-decoration:none;
    }
    
    
`

export const SingleDetial = styled.div`
    margin-top: 8px;
    margin-bottom: 20px;
    
    display: flex;
    justify-content: space-between;
    .email-link{
        
        display: flex;
        
        align-items: center;
        
    }
    .phone-link{
        display: flex;
        
        
        
    }
    p{
        padding-left: 15px;
    }
    .timing{
        
        display: flex;
        color: #333;
        align-items: center;
        

    }

`

export const TimeSocial = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;


    .socail-links{
        display: flex;
        padding: 0 20px 0px 20px;
        align-items: center;

    }
    a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        height: 20px;
        margin-left: 5px ;
        background-color: #1c3988;
        padding: 5px;
        border-radius: 4px;
    }
    

`

export const BottomFooter = styled.div`
    padding: 50px 20px;
    text-align: center;
    color: #333;
    font-size: 16px;

`

