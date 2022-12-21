import React from 'react';
import '../css/style.css';
 import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact-sec'>

<section className="footer_get_touch_outer">
    <div className="container">
      <div className="footer_get_touch_inner grid-70-30">
        <div className="colmun-70 get_form">
          <div className="get_form_inner">
            <div className="get_form_inner_text">
              <h3>Get In Touch</h3>
            </div>
            <form action="#">
              <div className="grid-50-50">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone/Skype"/>
              </div>
              <div className="grid-full">
                <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
        <div className="colmun-30 get_say_form">
          <h5>Say Hi!</h5>
          <ul className="get_say_info_sec">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:">info@stackfindover.com</Link>
            </li>
            <li>
              <i className="fa fa-whatsapp"></i>
              <Link to="tel:">+91 9602381997</Link>
            </li>
            <li>
              <i className="fa fa-skype"></i>
              <Link to="/">Stackfindover</Link> 
            </li>
          </ul>  
          <ul className="get_say_social-icn">
            <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
            <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
          </ul>          
        </div>        
      </div>
    </div>
  </section>



    </div>
  )
}

export default Contact