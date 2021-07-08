import styled from 'styled-components'

export const MainContainer = styled.div`

`

export const NextBatch = styled.div`
    height: 110px;
    width: 100%;
    background-color: #1c3988;
    display: flex;
    align-items: center;
    
    color: white;
    font-weight: 500;
    font-size: 22px;
    div{
        padding-left: 5vw;
    }

`

export const DetailSection = styled.div`
    display: grid;
   
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    max-width: 90%;
    margin: 30px auto;
    padding: 60px 30px;
    color:#363636;

    @media only screen and (max-width: 1000px) {
        padding:0;
        display: flex;
        flex-direction: column;
        align-items: center;

        
    }
    
    
    
    align-items: center;
    img{
        
        max-width: 100%;
        height: auto;
        max-height: 500px;
    }
    h2{
        font-size: 36px;
        font-weight: 800;
        padding: 20px 1px;
        
    }
    p{
        text-align: justify;
        margin-top: 15px;
        font-size: 15px;
    }
    .text-details{
        padding: 20px 50px;
        height: 100%;
        @media only screen and (max-width: 750px) {
            padding:20px;
            margin-top: 30px;

        }
    }

`



export const DetailSecondSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    max-width: 90%;
    margin: 30px auto;
    padding: 60px 30px;
    color:#363636;

    @media only screen and (max-width: 1020px) {
        padding:0;
        display: flex;
        flex-direction: column-reverse;
        
    }
    
    
    
    align-items: center;
    img{
        
        max-width: 100%;
        height: auto;
        max-height: 500px;
    }
    h2{
        font-size: 36px;
        font-weight: 800;
        padding: 20px 1px;
        
    }
    p{
        text-align: justify;
        margin-top: 15px;
        font-size: 15px;
    }
    .text-details{
        padding: 20px 50px;
        height: 100%;
        @media only screen and (max-width: 750px) {
            padding:20px;
            margin-top: 30px;

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
            background: #106eea;
            transition: all 0.3s ease;
            padding: 13px 32px;
            margin-top: 28px;
        }
    }

`