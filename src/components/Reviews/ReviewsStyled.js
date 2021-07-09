import styled from 'styled-components'

export const MainContainer = styled.div`
    padding:20px 30px;
    background: #f1f6fc;

`


export const UpparText = styled.div`
    text-align:center;
    p{
        color: #999;
    }
    h2{
        font-size: 36px;
    }
    

`

export const MainContent = styled.div`
    display: flex;
    margin: 20px 30px;
    background:white;
    
    img{
        max-height: 600px;
    }
    
    svg{
        width: 40px;
        height: 40px;
        color: rgba(18, 115, 235, 0.12);
    }
    @media only screen and (max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px 10px;
        img{
        max-height: none;
        width: 100%;
    }


    }
    

`

export const ReviewSection = styled.div`
    display: flex;
    
    flex-direction: column;
    align-items: center;
    text-align:center;
    padding: 50px;
    p{
        text-transform: capitalize;
        color: #363636;
        font-style: italic;
        font-size: 18px;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .review-text{
        padding-top: 20px;
        min-height: 180px;
    }
    .button-div{
        display: flex;
        justify-content: space-evenly;
        margin-top: 30px;
        
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #106eea;
            border-radius: 50%;
            height: 35px;
            border: none;
            font-size: 24px;
            font-weight: 600;
            width: 35px;
            color: white;
            line-height: 36px;
            transition: all 0.3s ease;
            margin-left: 2px;
            box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
            cursor: pointer;
            margin-left: 15px;
            
        }
        svg{
            color: white;
            
            height: 20px;
            width: 20px;
        }

    }

    @media only screen and (max-width: 420px) {
        .review-text{
        padding-top: 20px;
        min-height: 280px;
    }

    }
    
`