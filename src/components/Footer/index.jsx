import React from 'react'
import "./footer.css"
import { Link } from 'react-scroll'
import { menu } from '../../data'
import { socialHandles } from '../../data'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="section_wrapper">
        <ul className="nav_link_container">
          {
            menu.map((list,index) => (
              <Link 
                activeClass="active"
                className='tab_item name'
                to={list.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                {list.name}
              </Link>
            ))
          }
        </ul>

        <div className="social_handles_container">
          {
            socialHandles.map((list,index)=>(
              <a href={list.link} className="icon_container social_handle" target='_blank' key={index}>
                {list.icon}
              </a>
            ))
          }
        </div>

        <div className="copyright_container">
          <h3>Copyright &copy; All right reserved - | 2024</h3>
          <p className="text_muted">Built with love from Samuel-Abbaly</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
