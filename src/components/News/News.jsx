import React from 'react'
import { MainContainer, NewsContainr, SingleNews, UpparText } from '../../components/News/NewsStyled'
import Logo from '../../assets/logo-dark.png'
import NewsOne from '../../assets/news1.jpg'
import NewsTwo from '../../assets/news2.jpg'




function News() {
    return (
        <MainContainer>
            <UpparText>
                <p>NEWS</p>
                <h2>#COVID19 Demands more full stack developers. <br />
                       <span style={{color:'#1c3988'}} >& Industry Updates</span> .</h2>
            </UpparText>
            <NewsContainr>
                <SingleNews>
                    <img src={NewsOne} alt="" />
                    <h3> IT project demand increases by 127% as offline businesses shut down. </h3>
                    <div className='bottom-section'>
                        <img src={Logo} alt="" />
                        <p>12 Aug</p>
                    </div>

                </SingleNews>
                <SingleNews>
                    <img src={NewsTwo} alt="" />
                    <h3> 13 reasons why businesses love hiring failed entrepreneurs. </h3>
                    <div className='bottom-section'>
                        <img src={Logo} alt="" />
                        <p>2 May 2020</p>
                    </div>

                </SingleNews>
                <SingleNews>
                    <img src={NewsOne} alt="" />
                    <h3> IT project demand increases by 127% as offline businesses shut down. </h3>
                    <div className='bottom-section'>
                        <img src={Logo} alt="" />
                        <p>12 Aug</p>
                    </div>

                </SingleNews>
            </NewsContainr>
            
        </MainContainer>
    )
}

export default News
