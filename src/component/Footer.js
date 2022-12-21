import React from 'react'

import '../css/style.css';
 import { Link } from 'react-router-dom';

function Footer() {

  
  return (
    <div className='footer'>

<footer>
       <div>
            <span className="logo">iTechnology</span>
       </div>

       <div className="row">
            <div className="col-3">
                <span className="footer-cat">Solution</span>
                <ul className="footer-cat-as">
                    <li><Link className="anchor" ><span>Interprise App Development</span></Link></li>
                    <li><Link className="anchor" ><span>Android App Development</span></Link></li>
                    <li><Link className="anchor" ><span>ios App Development</span></Link></li>
                </ul>
            </div>
            <div className="col-3">
                <span className="footer-cat">Industries</span>
                <ul className="footer-cat-as">
                    <li><Link className="anchor" ><span>Healthcare</span></Link></li>
                    <li><Link className="anchor" ><span>Sports</span></Link></li>
                    <li><Link className="anchor" ><span>ECommerce</span></Link></li>
                    <li><Link className="anchor" ><span>Construction</span></Link></li>
                    <li><Link className="anchor" ><span>Club</span></Link></li>
                </ul>
            </div>
            <div className="col-3">
                <span className="footer-cat">Quick as</span>
                <ul className="footer-cat-as">
                    <li><Link className="anchor" ><span>Reviews</span></Link></li>
                    <li><Link className="anchor" ><span>Terms & Condition</span></Link></li>
                    <li><Link className="anchor" ><span>Disclaimer</span></Link></li>
                    <li><Link className="anchor" ><span>Site Map</span></Link></li>
                </ul>
            </div>
            <div className="col-3" id="newsletter">
                <span className="footer-cat">Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>
                
                <div className="social-as social-2">
                    <Link className="anchor" ><i className="fab fa-facebook-f"></i></Link>
                    <Link className="anchor" ><i className="fab fa-twitter"></i></Link>
                    <Link className="anchor" ><i className="fab fa-aedin-in"></i></Link>
                    <Link className="anchor" ><i className="fab fa-instagram"></i></Link>
                    <Link className="anchor" ><i className="fab fa-tumblr"></i></Link>
                    <Link className="anchor" ><i className="fab fa-reddit-alien"></i></Link>
                </div>

                <div id="address">
                    <span className="footer-cat">Office Location</span>
                    <ul>
                        <li>
                            <i className="far fa-building"></i>
                            <div>Los Angeles<br/>
                            Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                        </li>
                        <li>
                            <i className="fas fa-gopuram"></i>
                            <div>Delhi<br/>
                            Office 150B, Behind Sana Gate Char Bhuja Tower, Station Road, Delhi</div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="social-as social-1 col-6">
                <Link className="anchor" ><i className="fab fa-facebook-f"></i></Link>
                <Link className="anchor" ><i className="fab fa-twitter"></i></Link>
                <Link className="anchor" ><i className="fab fa-aedin-in"></i></Link>
                <Link className="anchor" ><i className="fab fa-instagram"></i></Link>
                <Link className="anchor" ><i className="fab fa-tumblr"></i></Link>
                <Link className="anchor" ><i className="fab fa-reddit-alien"></i></Link>
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2019-2020
       </div>
       <div id="owner">
           <span>
               Designed by <Link to="https://www.codingtuting.com">CodingTuting.Com</Link>
           </span>
       </div>
       <Link to="#topHeader" id="gotop">Top</Link>
    </footer>


    





    </div>
  )
}

export default Footer