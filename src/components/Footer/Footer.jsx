import React from 'react'
import { MainContainer , TimeSocial } from './FooterStyle'
import {FaFacebookF, FaInstagramSquare , FaTwitter , FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <MainContainer>
            <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved. <br /> Privacy Policy | Terms of Service | * Registration Charges Applied</p>
            <TimeSocial>
                    
                    <div className="socail-links" >
                        <a href="https://www.instagram.com/" target='blank' ><FaFacebookF/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaInstagramSquare/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaTwitter/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaLinkedinIn/></a>
                        
                        
                        
                        
                    </div>
                </TimeSocial>
            
        </MainContainer>
    )
}

export default Footer
