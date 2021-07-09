import React from 'react'
import { MainContainer , UpparText , GridContainer, SingleGrid } from './SkillGridStyled'
import IndustryStandards from '../../assets/Industry Standards.png'
import Frontend from '../../assets/frontend.png'
import Backend from '../../assets/backend.png'
import Production from '../../assets/production.png'
import ProjectManagements from '../../assets/projectmang.png'
import Skills from '../../assets/softskill.png'
import BasicAna from '../../assets/basic.png'
import MaxPro from '../../assets/maxpro.png'


function SkillGrid() {
    return (
        <MainContainer>
            <UpparText>
                <p>WHAT YOU LEARN</p>
                <h2>at HiCoder is useful <br />
                    <span style={{color:'#1c3988'}} >Technology, Management & more</span> .</h2>

            </UpparText>
            <GridContainer>
                <SingleGrid>
                    <img src={Frontend} alt="" />
                    <h3>Front End</h3>
                    <p>Students learn to design, develope the UI following UX with industry standards.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={Backend} alt="" />
                    <h3>Backend</h3>
                    <p> Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={ProjectManagements} alt="" />
                    <h3>Project Managements</h3>
                    <p>Students learn to plan, project, and execute development projects with client expectation.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={BasicAna} alt="" />
                    <h3>Basic Analytic</h3>
                    <p>Students learn about analytics, usability, and integration of analytics in their production application.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={Skills} alt="" />
                    <h3>Soft Skills</h3>
                    <p>Soft skills encourages open communication & enhances corporate skills having corporate attitude.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={Production} alt="" />
                    <h3>Production Deployement</h3>
                    <p>Students learn to create a server, deploy an application following security guidelines.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={IndustryStandards} alt="" />
                    <h3>Industry Standards</h3>
                    <p>Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.</p>

                </SingleGrid>
                <SingleGrid>
                    <img src={MaxPro} alt="" />
                    <h3>Max Pro Resume</h3>
                    <p>Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.</p>

                </SingleGrid>
                
            </GridContainer>
            
        </MainContainer>
    )
}

export default SkillGrid
