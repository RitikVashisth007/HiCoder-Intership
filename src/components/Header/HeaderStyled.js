import styled from 'styled-components'

export const MainContainer = styled.div`

`
export const UpparMainHeader = styled.div`
    height: 47px;
    background-color: #1c3988;
    width: 100%;

    @media only screen and (max-width: 950px) {
        display: none;

    }

`

export const UpparHeader = styled.div`
    width: 96%;
    margin: auto;
    height: 47px;
    background-color: #1c3988;
    display: flex;
    justify-content: space-between;
    color:white;
    font-size: 14px;
    a{
        text-decoration: none;
        color:white;
    }
    svg{
        width: 22px;
        height: 19px;
        padding-right: 10px;
    }
    align-items: center;
    


`


export const ContactDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .email-link{
        padding: 0 20px 0px 20px;
        display: flex;
        border-right: 1px solid #052887;
        align-items: center;
        
    }
    .phone-link{
        display: flex;
        padding: 0 20px 0px 20px;
        
        
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
    .timing{
        padding: 0 20px 0px 20px;
        display: flex;
        border-right: 1px solid #052887;
        align-items: center;
        

    }

`
export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    align-items: center;
    transition: padding 0.5s ease-out;
    
    padding: ${({ scrolled }) => scrolled > 30 ? '0' : '25px 0px;' };
    position: fixed;
    position: ${({ scrolled }) => scrolled > 30 ? 'fixed' : 'static' };
    margin-bottom:  ${({ scrolled }) => scrolled > 30 ? '80px' : '0' }; 
    background-color: white;
    top: 0;
    @media only screen and (max-width: 950px) {
        position: absolute;
        padding: 0;

    }
   

`

export const LogoContainer = styled.div`
    margin-left: 50px;
    img{
        max-width: 200px;
        padding: 5px;
    }
       

`

export const NavLinksContainer = styled.div`
    margin-right: 50px;
    text-transform: uppercase;
    ul{
        display: flex;
        list-style: none;
        
    }
    li{
        margin-left: 15px;
        padding-right: 12px;
        font-weight: 500 ;
        align-items: center;
        :hover{
            color:#1c3988;
        }
        .slidebar{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 45px;
            height: 40px;
            margin-top: -8px;
            

           

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
    
    }
    span{
        display: inline-block;
        width: 10px;
        
    }
    .menu-icon{
        display: none ;
    }

    @media only screen and (max-width: 950px) {
        .slidebar-icon{
            display: none;
        }
        .apply-now-li{
            display: none;
        }
        

        .menu-icon{
            display: unset ;
    }
    ul{
        flex-direction: column;
        display: ${({ mainDrop }) => mainDrop ? 'unset' : 'none' };
        position: absolute;
        
        /* width: 80%; */
        width: 90vw;
        top: 68px;
        left: 30px;
        background-color: #1c3988;
        color: white;

        
        
    }
    li{
        padding: 10px;
        :hover{
            color:white;
        }
    }
    span{
        float: right;
    }
        

    }
    @media only screen and (max-width: 550px) {
        ul{
            width: 80vw;
        }
    }


    
    
    

    

`

export const ApplyNowButton = styled.div`
    margin-top: -7px;
    button{
        background-color: #1c3988;
        outline: none;
        border:none;
        padding:9px 20px;
        color: white;

    }
`

export const SlideBarContainer = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    width: 450px;
    overflow: auto;
    position: fixed;
    right: ${({showSlide})=> showSlide?'0': '-540px'};
    font-size: 15px;
    top: 0;
    
    max-width: 520px;
    z-index: 2000;
    transition: right 0.3s ease-in-out 0s;
    padding: 25px 30px 50px 50px;
    background-color: white;
    @media only screen and (max-width: 950px) {
        display: none;

    }
    
`

export const DropDwonlinks = styled.div`
    
    width: 100px;
    padding-top: ${({ scrolled }) => scrolled > 30 ? '50px' : '75px' } ;
    color: white;
    font-size: 14px;
    height: auto;
    position: absolute;
    margin-left: -120px;
    
    
    display: ${({ dropDown }) => dropDown  ? 'unset' : 'none' };
    ul{
        display: flex;
        flex-direction: column;
        border-radius: 1px 1px 4px 4px;
        background-color: #1c3988;
        min-width: 180px;
        
        

    }
    li{
        padding: 15px 46px;
        :hover{
            color:black;
        }
    }
    .course-dropdown{
        width: 240px;
    }
    @media only screen and (max-width: 950px) {
        position: unset;
        
        ul{
            position: unset;
            width: 100%;
            background-color: white;
            color: black;
            margin-bottom: 10px;
            
        }
        li{
        :hover{
            color:black;
        }
    }
        .course-dropdown{
            width: auto;
        }

    }
    

`