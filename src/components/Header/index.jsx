import React,{useRef} from 'react'
import "./header.css"
import {profile1} from "../../images"
import {profile2} from "../../images"
import Facts from "./Facts"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const container = useRef(null)
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    gsap.fromTo(".profile_photo_container",{
      scale:.5,
      duration:1,
      opacity:0.5,
    },{
      scale:1,
      duration:1,
      ease:"sine.in",
      opacity:1,
    })


    gsap.from(".intro_text",{
      fontSize:100,
      duration:1,
      delay:1,
      ease:"sine.in",
    })


    const timeline = gsap.timeline();
    timeline
    .from(".header_info_top",{
      opacity:0,
    })
    .from(".header_title",{
      opacity:0,
      y:-30,
    })
    .from(".header_description",{
      opacity:0,
    })
    .from(".btn",{
      x:-40,
      opacity:0,
      stagger:.5
    })


  },{scope:container})



  return (
    <header id='header' className='blur-effect'>
      <div className="stroke_text intro_text">Hello</div>
      <div className="section_wrapper header_container">
        <div className="column intro_container blur-effect">
          <div className="header_info">
            <div className="header_info_top">
              Hello There! I'm <span className="color_primary">Samuel Abbaly</span>
            </div>
            <div className="header_info_middle">
              <h1 className="primary_title header_title">I'M A WEB DEVELOPER</h1>
              <p className="text_muted header_description">I dissect intricate user experience challenges to engineer 
              integrity-focused solutions that resonate with billions of users.</p>
            </div>
            <Facts />
            <div className="header_info_bottom">
              <button className="btn">Download CV</button>
              <a href="mailto:samuelabbaly@gmail.com" className='btn'>Email Me</a>
            </div>
          </div>
        </div>
        {/* <div className="me_container blur_effect">
          <div className="photo_container">
            <img src={profile2} alt="" />
          </div>
        </div>   */}
        <div className="column profile_wrapper">
          <div className="photo_container">
            <img src={profile1} alt="" className="profile_photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
