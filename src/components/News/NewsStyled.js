import styled from 'styled-components'


export const MainContainer = styled.div`

`


export const UpparText = styled.div`
    text-align:center;
    margin: 30px 0;
    p{
        color: #999;
        margin-bottom: 15px;
    }
    h2{
        font-size: 30px;
    }

`


export const NewsContainr = styled.div`
    display: flex;
    overflow-x:auto;
    padding: 20px 50px;
    &::-webkit-scrollbar {
        display: none;
    }

`

export const SingleNews = styled.div`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    min-width: 300px;
    margin-right: 25px;
    background: #ffffff;
    box-shadow: 0 5px 20px rgb(34 34 34 / 10%);
    cursor: pointer;
    h3{
        padding: 33px 20px 25px;
    }
    img{
        width: 100%;
    }
    .bottom-section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        img{
            width: 80px;
        }
        p{
            font-size: 13px;

        }
        h3{
            font-size: 22px;
        }
    }
    :hover{
        transform: translate(0,-10px);
    }

`