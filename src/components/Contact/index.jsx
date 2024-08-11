import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="primary_title">Contact Me</h2>
      <div className="contact_container">
        <div className="section_header">
          
          <p className="text_muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>

          <div className="contact_options">

            <article className="contact_option">
              <MdOutlineEmail className="contact_icon"/>
              <h3>Email</h3>
              <h5>iamsamuel@gmail.com</h5>
              <a href="mailto:samuelabbaly@gmail.com" className="btn" target="_blank">Send a message</a>
            </article>

            <article className="contact_option">
              <RiMessengerLine className="contact_icon"/>
              <h3>Messenger</h3>
              <h5>Samuel Abbaly</h5>
              <a href="http://m.me/profile?id=profile-id" className="btn" target="_blank">Send a message</a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className="contact_icon"/>
              <h3>Whatsapp</h3>
              <h5>+234913126835</h5>
              <a href="https://api.whatsapp.com/send?phone=+2349131268315" className="btn" target="_blank">Send a message</a>
            </article>
          </div>
        </div>

        <div className="contact_group">
          

          <form>
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" rows={7}></textarea>
            <button className="btn btn_primary" type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
