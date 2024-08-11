import React, { useEffect, useRef } from "react";
import "./about.css";
import { profile2 } from "../../images";
import gsap from 'gsap'
import { ScrollTrigger } from  'gsap/ScrollTrigger'

const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about_container",{
      scale:0.7,
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    })
  },[])

  return (
    <section id="about" ref={container}>
      <div className="section_wrapper about_container">
        <div className="me_container blur_effect">
          <div className="photo_container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section_header">
          <h1 className="primary_title">About Me</h1>
          <h1 className="title">
            I am <span className="color_primary">Samuel Abbaly</span>
          </h1>
          <p className="text_muted description">
            Experienced Full Stack Developer with a passion for creating
            dynamic, intuitive, and responsive applications. Proficient in
            multiple programming languages and frameworks, as well as database
            design and management. Strong problem-solving and analytical skills,
            and a track record of delivering high-quality code on time and on
            budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
