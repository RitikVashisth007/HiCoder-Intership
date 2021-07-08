import styled from 'styled-components'

export const MainContainer = styled.div`
    
    background-color: white;
    svg{
        width: 24px;
        height: 21px;
        padding-right: 10px;
    }
    
    
    
    


`

export const LogoContainer = styled.div`
    margin: 20px;
    img{
        max-width: 200px;
        padding: 5px;
    
    }
    

`

export const SlideBarContainer = styled.div`
    
    
   


    .slidebar{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 45px;
                height: 40px;
                margin: 0 0 0 auto;
                

            

            .dot1{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: black;
            }
            .dot2{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #1c3988;
            }
            
        }

`

export const MainDetails = styled.div`
    margin-top: 40px;
    p{
        font-size: 18px;
        line-height: 28px;
        color: #333;
        margin-bottom: 0;
        margin: 0 0 26px;
    }
    

`

export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    a{
        font-size: 15px;
        color: #363636;
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
        
        align-items: center;
        

    }

`

export const TimeSocial = styled.div`
    display: flex;
    justify-content: space-evenly;


    .socail-links{
        display: flex;
        padding: 0 20px 0px 20px;
        align-items: center;

    }
    

`