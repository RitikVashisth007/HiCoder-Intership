import React,{useEffect, useState} from 'react'
import { MainContainer } from './GoTopStyled'
import {TiArrowUpThick} from 'react-icons/ti'

function GoTop() {
    const [scrolled, setscrolled] = useState('')
    useEffect(() => {
        window.addEventListener("scroll",function(){
            if(window.pageYOffset>0){
                setscrolled(window.pageYOffset) 
            }
        })
    }, [])
    const scrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    return (
        <MainContainer scrolled={scrolled} >
            <button onClick={scrollTop} ><TiArrowUpThick/></button>
            
        </MainContainer>
    )
}

export default GoTop
