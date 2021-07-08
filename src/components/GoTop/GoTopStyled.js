import styled from 'styled-components'

export const MainContainer = styled.div`
    position: fixed;
    bottom: 50px;
    right: 30px;
    display: ${({scrolled})=> scrolled>70?'unset': 'none'};;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #106eea;
        border-radius: 50%;
        height: 40px;
        border: none;
        font-size: 24px;
        font-weight: 600;
        width: 42px;
        color: #fff;
        line-height: 36px;
        transition: all 0.3s ease;
        margin-left: 2px;
        box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
        cursor: pointer;
        
    }
    
`