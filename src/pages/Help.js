import React from 'react';
import '../css/style.css';
 import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="help-sec">

<section id="banner">
			<div className="ban" id="banner-container">
				<div className="row" id="banner-row">
					<div className="col-md-7" id="banner-col">
						<h3>BEST PROFESSIONAL WEBSITE DESIGN
							SOFTWARE DEVELOPMENT COMPANY
						</h3>
						<p>The fastest way to grow your business with leader in technology. <br/>
						Be authentic. In a ovesaturated market it is vutal to do things that make you and
						your services stand out.</p>

						<div className="d-grid gap-2 d-md-flex justify-content-center">
							<Link to='/' className="btn  brand-btn" role="button">Contact Us</Link>
						</div>
					</div>
					<div className="col-md-5" id="banner-col2">
						<img src="https://www.theedigital.com/wp-content/uploads/2020/07/Latest-Web-Design-Trends-and-Standards.jpg" alt="..." className="img-responsive rounded mx-auto d-block" />
					</div>
				</div>
			</div>
		</section>

		
		<section id="service" className='mt-5'>
			<h1 className="text-center mt-3">SERVICES</h1>
			<div className="container" id="service-container">
				<div className="row" id="banner-row">
					<div className="col-md-4" id="service-col1">
						<img src="https://www.dreamhost.com/blog/wp-content/uploads/2018/09/elements-web-design-opt.jpg" className="img-fluid rounded mx-auto d-block" alt="..." />
						<h3>Website Design</h3>
						<p>User Experience Design.Website Content Strategy.Cross Browserand Platform Testing.
						</p>
					</div>
					<div className="col-md-4" id="service-col2">
						<img src="https://5.imimg.com/data5/VP/LC/HP/GLADMIN-60238/bulk-sms-software-500x500.jpg" alt="..." />
						<h3>Bulk SMS</h3>
						<p>1.Toll Free Number <br/>
							2.IVR <br/>
							3.Virtual Number</p>
					</div>
					<div className="col-md-4" id="service-col3">
						<img src="https://miro.medium.com/max/1400/1*6iGMk8YYZ9Lwmm27RWMwig.png" alt="..." />
						<h3>Payment Gateways</h3>
						<p> Some of the most renowned are: eSewa, Khalti, I- or Epay, IME Pay, Nabil or Himalayan bank and Qpay.
						</p>
					</div>
				</div>
			</div>
		</section>
		<hr/>  

	
		<section id="about">
			<h1 className="text-center">ABOUT US</h1>
			<div className="container" id="about-container">
				<div className="row" id="banner-row">
					<div className="col-md-5" id="about-col">
						<ul>
							<li>
								Kratos is all about Delivering High
								Quality web design and development
								services, Cost effective and
								reliable solutions.
							</li>
							<li>SCHOOL/COLLEGE MANAGEMENT SOFTWARE
								(CAMPUS PRO)</li>
							<li>
								Let us take care of your Business needs.
								Customer Productivity is our Priority.
							</li>				
						</ul>
					</div>
					<div className="col-md-7" id="banner-col2">
						<img src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page.png" className="img-responsive rounded mx-auto d-block" alt="..."/>
					</div>
				</div>
			</div>
		</section>
		<hr/>

	
		<section id="product">
			<h1 className="text-center">OUR PRODUCTS</h1>
			<div className="container" id="product-container">
				<div className="row" id="banner-row">
					<div className="col-md-6" id="about-col">
						<img src="https://img.freepik.com/free-psd/technology-web-design-template_23-2149216787.jpg?w=2000" className="img-responsive rounded mx-auto d-block" alt="..." />
					</div>
					<div className="col-md-6" id="product-col2">
						<ul >
							<li>CLINIC MANAGMENT SYSTEM</li>
							<li>SCHOOL/COLLEGE MANAGEMENT
								SOFTWARE (CAMPUS PRO)</li>
							<li>SERVICE MANAGEMENT SOFTWARE</li>
							<li>E-COMMERCE WEBSITE</li>
				
						</ul>
					</div>
				</div>
			</div>
		</section>

    </div>
  )
}

export default Help