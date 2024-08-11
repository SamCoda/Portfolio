import React from "react";
import "./testimonials.css";
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { profile3, profile4, profile5, profile6 } from "../../images";


const data = [
  {
    avatar:profile3,
    name: "Adeoluwa Femi",
    review:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eius. Id officiis reprehenderit libero corporis at, dolore voluptatem, iure ut blanditiis a aliquam iusto inventore vitae non eos culpa veniam voluptatum eaque, molestias debitis quos!`
  },
  {
    avatar:profile4,
    name: "Feyishara Kuti",
    review:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eius. Id officiis reprehenderit libero corporis at, dolore voluptatem, iure ut blanditiis a aliquam iusto inventore vitae non eos culpa veniam voluptatum eaque, molestias debitis quos!`
  },
  {
    avatar:profile5,
    name: "Robert Hoooke",
    review:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eius. Id officiis reprehenderit libero corporis at, dolore voluptatem, iure ut blanditiis a aliquam iusto inventore vitae non eos culpa veniam voluptatum eaque, molestias debitis quos!`
  },
  {
    avatar:profile6,
    name: "Nathen Landman",
    review:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, eius. Id officiis reprehenderit libero corporis at, dolore voluptatem, iure ut blanditiis a aliquam iusto inventore vitae non eos culpa veniam voluptatum eaque, molestias debitis quos!`
  }
]


const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="section_wrapper">
        <div className="section_header">
          <h2 className="primary_title">Testimonials</h2>
          <p className="text_muted description">
            Discover what clients are saying about their experiences working
            with me as their trusted web developer. From startups to established
            businesses, my dedication to crafting exceptional online experiences
            shines through in their words.
          </p>
        </div>

        <Swiper 
        className="testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
        breakpoints={{
          700:{
            slidesPerView:2,
          }
        }}
        >
          {
            data.map(({avatar,name,review},index)=>(
              <SwiperSlide className="testimonial" key={index}>
                <div className="client_avatar">
                  <img src={avatar} alt={review} />
                </div>
                <h3 className="client_name">{name}</h3>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
