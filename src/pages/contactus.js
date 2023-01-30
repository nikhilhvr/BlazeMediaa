import React from 'react'
import BlogSection from '../sections/blogsection';
import Member1 from '../assets/Contactus/abhi.jpg';
import Styles from '../theme/contactus.module.css';
import Contact from '../sections/contact';
import Accordion from 'sections/accordion';
import { FaDAndD } from "react-icons/fa";
import {FaFulcrum} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa"
import Head from 'next/head';
import Calendlly from 'sections/Calendly';
import Chat from 'assets/widget/instagram.png';
import Community from 'assets/widget/twitter.png';
import Github from '../assets/widget/youtube.png'
import Growthpage from 'sections/growthpage';
const blog = () => {
  return (
 
    <>
  <Head>
	<title>Contact Us</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>
<Growthpage/>
<section className={Styles.sectionteam}>
		<div className={Styles.container}>
 
			<div className={Styles.headersectionmain}>
				{/* <div className="col-md-8 col-lg-6"> */}
					<div className={Styles.headersection}>
						<h3 className={Styles.smalltitle}>Our Experts</h3>
						<h2 className={Styles.title}>Let's meet with our team members</h2>
					{/* </div> */}
				</div>
			</div>

			<div className="row">
	
				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/C4E03AQF49LygdfUACQ/profile-displayphoto-shrink_400_400/0/1628187042403?e=1678320000&v=beta&t=pnjJcuy0-sP6xh4AUoSFeJhwHpYfvrJN_obVsXhMlfM" alt=""/>
							<span className={Styles.icon}>
								 <i className="fab fa-html5"><FaDAndD/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Somya</h3>
							<span className={Styles.speciality}>Co-Founder</span>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/D4D03AQFFiHgNW_Vqlg/profile-displayphoto-shrink_400_400/0/1671013059743?e=1679529600&v=beta&t=YTlg3gQr6uMNtVfG3-6aOWpPeTOwKGu10Xv4abhzq3A" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-wordpress-simple"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>Abhishek</h3>
							<span className={Styles.speciality}>Co-Founder & CEO</span>
						</div>
					</div>
				</div>
		
				<div className="col-sm-6 col-lg-4 col-xl-3">
            <div className={Styles.singleperson}>
              <div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/C4D03AQExLoQwMXQbJA/profile-displayphoto-shrink_400_400/0/1653617253928?e=1678320000&v=beta&t=JgFNjSvZAW0z5CEEGqOh036cDfJ5r-eWDSaFLNiP6B4" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-angular"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>123</h3>
							<span className={Styles.speciality}>321</span>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className={Styles.singleperson}>
						<div className={Styles.personimage}>
							<img src="https://media.licdn.com/dms/image/D4D03AQFZeZTVJFl3-g/profile-displayphoto-shrink_400_400/0/1665772488365?e=1678320000&v=beta&t=WHhFc9TQupwPkCO0t6qDlByExRdfWAjpf7s6wpWXBpQ" alt=""/>
							<span className={Styles.icon}>
								<i className="fab fa-js"><FaFulcrum/></i>
							</span>
						</div>
						<div className={Styles.personinfo}>
							<h3 className={Styles.fullname}>123</h3>
							<span className={Styles.speciality}>321</span>
						</div>
					</div>
				</div>
	
			</div>
		</div>
	</section>
	<Calendlly/>
	<div className="container-fluid">
		<div className={Styles.socialmediacard}>
			<div className={Styles.socialmedia}>
		  <img src={Chat} alt="" />
				{/* Blaze Instagram */}
			</div>
			<div className={Styles.socialmedia}>

			</div>
			<div className={Styles.socialmedia}>

			</div>
			<div className={Styles.socialmedia}>

			</div>
		</div>
		</div>
		{/* <Accordion/> */}
      </>
 

  )
}

export default blog


