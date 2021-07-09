import React from 'react'
import Hero from '../../components/Hero/Hero'
import { NextBatch , MainContainer, DetailSection  , DetailSecondSection , MiniDetails , PartnersContainer, CompanyImage} from './HomeStyled'
import FirstImage  from '../../assets/first.jpg'
import SecondImage  from '../../assets/second.jpg'
import Achievements from '../../components/Achievements/Achievements'
import WhyImage from '../../assets/why.jpg'
import FingerPoint from '../../assets/finger.png'
import People from '../../assets/people.png'
import Help from '../../assets/help.jpg'
import SkillGrid from '../../components/SkillGrid/SkillGrid'
import Reviews from '../../components/Reviews/Reviews'
import ComapanyOne from '../../assets/company1.jpg'
import ComapanyTwo from '../../assets/company2.jpg'
import News from '../../components/News/News'


function Home() {
    return (
        <MainContainer>
            <Hero/>
            <NextBatch>
                <div>
                    <span style={{fontSize:'24px'}} > NEXT BATCH : </span> &nbsp; 27 July |  Apply Now

                </div>
                
            </NextBatch>

            <DetailSection>
                <div>
                    <img src={FirstImage} alt="" />
                </div>
                <div className='text-details'>
                    <h4>HICODER</h4>
                    <h2>We help students learn <br />
                       <span style={{color:'#1c3988'}} >Full Stack Development</span> .</h2>
                       <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                </div>

            </DetailSection>
            
            <DetailSecondSection  >
                <div className='text-details'>
                    
                    <h2>Trained on the most in-demand Technology Skills.</h2>
                       <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                       <button>Apply Now</button>
                </div>
                <div>
                    <img src={SecondImage} alt="" />
                </div>
            </DetailSecondSection>

            <Achievements/>
            <DetailSecondSection  >
                <div className='text-details'>
                    
                    <h2>Why HiCoder?</h2>
                       <p>HiCoder enables students to think about real-world problems, design, and develop the right solution. know more.  <span style={{color:'#106eea', cursor:'pointer'}} >know more</span> </p>
                       <MiniDetails>
                           <div>
                               <img src={FingerPoint} alt="" />
                           </div>
                           <div className='mini-details-text' >
                               <h3>
                                    Personalized Training
                               </h3>
                               <p>
                                    We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.
                               </p>
                           </div>

                       </MiniDetails>
                       <MiniDetails>
                           <div>
                               <img src={People} alt="" />
                           </div>
                           <div className='mini-details-text' >
                               <h3>
                               Production Projects
                               </h3>
                               <p>
                                    Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.
                               </p>
                           </div>

                       </MiniDetails>
                       
                </div>
                <div>
                    <img src={WhyImage} alt="" />
                </div>
            </DetailSecondSection>
            
            <DetailSection>
                <div>
                    <img src={Help} alt="" />
                </div>
                <div className='text-details'>
                    
                    <h2>How does HiCoder help? </h2>
                       <p style={{fontWeight:500}} >HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</p>
                       <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                       <button>Know More</button>
                </div>

            </DetailSection>
            <SkillGrid/>
            <Reviews/>
            <PartnersContainer>
                <h2>
                    Partner & Associates
                </h2>
                <CompanyImage>
                    <img src={ComapanyOne} alt="" />
                    <img src={ComapanyTwo} alt="" />
                    <img src={ComapanyOne} alt="" />
                    <img src={ComapanyTwo} alt="" />
                    <img src={ComapanyOne} alt="" />
                    <img src={ComapanyTwo} alt="" />
                    <img src={ComapanyOne} alt="" />
                    <img src={ComapanyTwo} alt="" />
                    
                </CompanyImage>
            </PartnersContainer>
            <News/>
        </MainContainer>

    )
}

export default Home
