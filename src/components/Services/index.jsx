import React, {useEffect, useRef} from "react";
import "./services.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import gsap from 'gsap'
import { ScrollTrigger } from  'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".service_head",{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )
    gsap.fromTo(".service",{
      y:-50,
      opacity:0,
    },
    {
      y:0,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:el,
        start:"-100% bottom",
        end:"bottom 20%",
        scrub:true,
      }
    })
  },[])

  return (
    <section id="services" ref={container}>
      <div className="section_wrapper services_wrapper">
        <div className="section_header center">
          <h2 className="primary_title">Services</h2>
          <p className="text_muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers.
          </p>
        </div>

        <div className="service_group">

          <article className="service">
            <div className="service_top">
              <div className="icon_container">
                <FaPaintBrush className="icon"/>
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End UI/UX */}

          <article className="service" style={{"--color-primary":"var(--color-success)"}}>
            <div className="service_top">
              <div className="icon_container">
                <BsCodeSquare className="icon"/>
              </div>
              <h3 className="title">Web Development</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End Web Dev */}

          <article className="service" style={{"--color-primary":"blueviolet"}}>
            <div className="service_top">
              <div className="icon_container">
                <FaPaintBrush className="icon"/>
              </div>
              <h3 className="title">Graphics Design</h3>
            </div>
            <div className="service_middle">
              <p className="text_muted description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptatum earum quam tempore, repellat aut vero ut eum,
                provident accusamus recusandae eligendi, adipisci sequi
                reiciendis quisquam? Sapiente optio rerum sequi!
              </p>
            </div>
            <div className="service_bottom">
              <button className="btn_primary btn">Read More</button>
            </div>
          </article>
          {/* End Graphics Design */}

        </div>
      </div>
    </section>
  );
};

export default Services;
