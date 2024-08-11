import React, { useEffect, useState, useRef } from 'react'
import "./Facts.css"
import Odometer from 'react-odometerjs';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    useEffect (()=> {
        const timeoutId = setTimeout(()=>{
            setExperience (10)
            setProjects (300)
            setClients (2.5)
        },3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const container = useRef(null) 
    gsap.registerPlugin(useGSAP) 
    useGSAP(()=>{
    const timeline = gsap.timeline();
    timeline
    .from(".fact_item",{
      delay:1.5,
      x:-100,
      stagger:.5,
      opacity:0,
    })

  },{scope:container})



  return (
    <div className='fact_container'>

      <div className="fact_item">
        <div className="count_container">
            <Odometer 
                value={experience}
            />
            <span className="indicator">+</span>
        </div>
        <p className="name">Years of Experience</p>
      </div>

      <div className="fact_item">
        <div className="count_container">
            <Odometer 
                value={projects}
            />
            <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>

      <div className="fact_item">
        <div className="count_container">
            <Odometer 
                value={clients}
            />
            <span className="indicator">+</span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>

    </div>
  )
}

export default Facts
