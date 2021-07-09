import React from 'react'
import {ItemConatiner, MainContainer} from './AchievementsStyled'
import Projects from '../../assets/projects.png'
import Industry from '../../assets/insdustry.png'
import Quality from '../../assets/quality.png'
import Application from '../../assets/application.png'

function Achievements() {
    return (
        <MainContainer>
            <ItemConatiner>
                <img src={Projects} alt="" />
                <p className='number-data' >35 +</p>
                <p>PROJECTS COMPLETED</p>
            </ItemConatiner>
            <ItemConatiner>
                <img src={Industry} alt="" />
                <p className='number-data' >47 +</p>
                <p>INDUSTRY EXPERTS</p>
            </ItemConatiner>
            <ItemConatiner>
                <img src={Quality} alt="" />
                <p className='number-data' >30 +</p>
                <p>QUALITY DEVELOPERS</p>
            </ItemConatiner>
            <ItemConatiner>
                <img src={Application} alt="" />
                <p className='number-data' >95,000 +</p>
                <p>APPLICATION USERS</p>
            </ItemConatiner>
        </MainContainer>
    )
}

export default Achievements
