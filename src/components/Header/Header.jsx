import React ,{useState, useEffect} from 'react'
import { ApplyNowButton, ContactDetails, DropDwonlinks, LogoContainer, MainContainer, MainHeader, NavLinksContainer, SlideBarContainer, TimeSocial, UpparHeader, UpparMainHeader } from './HeaderStyled'
import {FaFacebookF, FaInstagramSquare , FaTwitter , FaLinkedinIn , FaRegClock} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import Logo from '../../assets/logo-dark.png'
import SlideBar from '../SlideBar/SlideBar'
import {TiThMenu} from 'react-icons/ti'

function Header() {
    const [showSlide, setshowSlide] = useState(false)
    const [scrolled, setscrolled] = useState('')
    const [dropDown, setdropDown] = useState(false)
    const [dropDownTwo, setdropDownTwo] = useState(false)
    const [dropDownThree, setdropDownThree] = useState(false)
    const [mainDropDown, setmainDropDown] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll",function(){
            if(window.pageYOffset>0){
                setscrolled(window.pageYOffset) 
            }
        })
    }, [])

    console.log(dropDown);
    return (
        <MainContainer>
            <UpparMainHeader>
            <UpparHeader>
                <ContactDetails>
                    <a href="mailto:admission@hicoder.in" className='email-link' > <AiOutlineMail/> <p>admission@hicoder.in</p> </a>
                    <a href="tel:3244280940" className='phone-link' > <BiPhoneCall/> <p> (+91) 9876543216</p></a>

                </ContactDetails>
                <TimeSocial>
                    <div className='timing'>
                       <FaRegClock/> <p> Mon - Fri: 10:00am - 06.00pm</p>
                    </div>
                    <div className="socail-links" >
                        <a href="https://www.instagram.com/" target='blank' ><FaFacebookF/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaInstagramSquare/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaTwitter/></a>
                        <a href="https://www.instagram.com/" target='blank' ><FaLinkedinIn/></a>
                        
                        
                        
                        
                    </div>
                </TimeSocial>

            </UpparHeader>
            </UpparMainHeader>
            <MainHeader scrolled={scrolled}>
                <LogoContainer>
                    <img src={Logo} alt="" />


                </LogoContainer>
                <NavLinksContainer mainDrop={mainDropDown}>
                    <TiThMenu className='menu-icon' onClick={()=>setmainDropDown(!mainDropDown)} />
                    <ul>
                        <li onMouseEnter={()=>setdropDown(true)} onMouseLeave={()=>setdropDown(false)} >Hicoder  {dropDown? <span>−</span>:<span>+</span>} 
                            <DropDwonlinks dropDown={dropDown} scrolled={scrolled} >
                                <ul>
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Contact
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                </ul>
                            </DropDwonlinks>
                        </li>
                        <li onMouseEnter={()=>setdropDownTwo(true)} onMouseLeave={()=>setdropDownTwo(false)} >Course {dropDownTwo? <span>−</span>:<span>+</span>} 
                        <DropDwonlinks dropDown={dropDownTwo} scrolled={scrolled} >
                                <ul className='course-dropdown' >
                                    <li>
                                        What You learn 
                                    </li>
                                    <li>
                                        How to Apply
                                    </li>
                                    <li>
                                        Fee Structure
                                    </li>
                                    <li>
                                        Apply
                                    </li>
                                </ul>
                            </DropDwonlinks>
                            
                         </li>
                        <li    onMouseEnter={()=>setdropDownThree(true)} onMouseLeave={()=>setdropDownThree(false)} >Hire {dropDownThree? <span>−</span>:<span>+</span>} 

                        <DropDwonlinks dropDown={dropDownThree} scrolled={scrolled} >
                                <ul>
                                    <li>
                                        Hire
                                    </li>
                                    
                                </ul>
                            </DropDwonlinks>
                        </li>
                        <li className='apply-now-li'> <ApplyNowButton> <button> ApplyNow </button> </ApplyNowButton>  </li>
                        <li className='slidebar-icon' >
                                <div onClick={()=>setshowSlide(!showSlide)}  className="slidebar" >
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
                        </li>
                    </ul>

                </NavLinksContainer>
            </MainHeader>
            <SlideBarContainer showSlide={showSlide} >
                <SlideBar slide={showSlide} setSlide={setshowSlide} />
            </SlideBarContainer>

            
        </MainContainer>
    )
}

export default Header
