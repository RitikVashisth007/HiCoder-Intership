import React from 'react'
import { About, BottomFooter, Contact, Info, MainContainer , MoreInfo, TimeSocial , SingleDetial } from './FooterStyle'
import {FaFacebookF, FaInstagramSquare , FaTwitter , FaLinkedinIn, FaRegClock } from 'react-icons/fa'
import {GrMap} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import Logo from '../../assets/logo-dark.png'

function Footer() {
    return (
        <MainContainer>
            <MoreInfo>
                <About>
                    <img src={Logo} alt="" />
                    <p>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
                    <button>Apply Now</button>
                </About>
                <Info>
                    <h3>Info</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>

                </Info>
                <Contact>
                    <h3>Contact</h3>
                    <SingleDetial>
                        <GrMap />
                        <p style={{color:'#333', fontSize:'14px'}} >264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</p>
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

                </Contact>
            </MoreInfo>
            
            <BottomFooter>
            <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved. <br /> Privacy Policy | Terms of Service | * Registration Charges Applied</p>
            <TimeSocial>
                    
                    <div className="socail-links" >
                        <a href="https://www.instagram.com/" target='blank' ><FaFacebookF/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaInstagramSquare/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaTwitter/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaLinkedinIn/></a>
                        
                        
                        
                        
                    </div>
                </TimeSocial>
            </BottomFooter>
            
        </MainContainer>
    )
}

export default Footer
