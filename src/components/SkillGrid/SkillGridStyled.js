import styled from 'styled-components'

export const MainContainer = styled.div`

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


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 20px;

`


export const SingleGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;
    background-image: linear-gradient(180deg, #ffffff 0%, #f2f4fc 100%);
    box-shadow: 0px 0px 45px -22px rgb(0 0 0 / 22%);
    padding: 40px 25px 30px;
    border-radius: 4px;
    img{
        width: 70px;
        height: 70px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p{
        margin-top: 20px ;
        text-align: center
    }


    
`