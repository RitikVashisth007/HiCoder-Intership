import React from 'react'
import { MainContainer , LogoContainer, SlideBarContainer, MainDetails, SingleDetial, ContactDetails, TimeSocial } from './SlideBarStyled'
import Logo from '../../assets/logo-dark.png'
import {GrMap} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {FaFacebookF, FaInstagramSquare , FaTwitter , FaLinkedinIn , FaRegClock} from 'react-icons/fa'

function SlideBar({setSlide,slide}) {
    return (
        <MainContainer>
            <SlideBarContainer>
                <div onClick={()=>setSlide(!slide)}  className="slidebar" >
                    <span className="dot1"></span>
                    <span className="dot2"></span>
                    <span className="dot1"></span>
                    <span className="dot2"></span>
                    <span className="dot1"></span>
                    <span className="dot2"></span>
                    <span className="dot1"></span>
                    <span className="dot2"></span>
                    <span className="dot1"></span>
                </div>

            </SlideBarContainer>
             
            <LogoContainer>
                    <img src={Logo} alt="" />


            </LogoContainer>

            <MainDetails>
                <p>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
            </MainDetails>
            <ContactDetails>
                <SingleDetial>
                    <GrMap style={{width: '40px',height: '35px'}}/>
                    <p style={{fontSize:'18px'}} >264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</p>
                </SingleDetial>
                <SingleDetial>
                    <a href="mailto:admission@hicoder.in" className='email-link' > <AiOutlineMail/> <p>admission@hicoder.in</p> </a>
                    
                </SingleDetial>
                <SingleDetial>
                    <a href="tel:3244280940" className='phone-link' > <BiPhoneCall/> <p> (+91) 9876543216</p></a>
                </SingleDetial>
                <SingleDetial>
                    <div className='timing'>
                       <FaRegClock/> <p> Mon - Fri: 10:00am - 06.00pm</p>
                    </div>
                </SingleDetial>
                <TimeSocial>
                    
                    <div className="socail-links" >
                        <a href="https://www.instagram.com/" target='blank' ><FaFacebookF/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaInstagramSquare/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaTwitter/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaLinkedinIn/></a>
                        
                        
                        
                        
                    </div>
                </TimeSocial>

            </ContactDetails>
            
        </MainContainer>
    )
}

export default SlideBar
