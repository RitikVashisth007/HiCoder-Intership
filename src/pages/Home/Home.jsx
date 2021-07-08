import React from 'react'
import Hero from '../../components/Hero/Hero'
import { NextBatch , MainContainer, DetailSection  , DetailSecondSection} from './HomeStyled'
import FirstImage  from '../../assets/first.jpg'
import SecondImage  from '../../assets/second.jpg'

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
        
        </MainContainer>

    )
}

export default Home
