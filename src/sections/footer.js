import React from 'react'
import Head from 'next/head';
import Styles from '../theme/blogpage.module.css'

const footer = () => {
  return (
    <>
           <Head>
	
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>
    <footer className="section-sm pb-0 border-top border-default">
      <div className="container">
         <div className="row justify-content-between">
            <div className="col-md-3 mb-4">
               <a className="mb-4 d-block" href="index.html">
                  <img class="img-fluid mt-3" width="150px" src="data:image/png;base64,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" alt="Blaze Media Logo"/>
               </a>
               <p>Blaze Media </p>
            </div>

            <div className="col-lg-2 col-md-3 col-6 mb-4">
               <h6 className="mb-4 mt-3">Quick Links</h6>
               <ul className="list-unstyled footer-list">
                  <li><a className={Styles.footertextt} href="about.html">About</a></li>
                  <li><a className={Styles.footertextt} href="contact.html">Contact</a></li>
                  <li><a className={Styles.footertextt} href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a className={Styles.footertextt} href="terms-conditions.html">Terms Conditions</a></li>
               </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-6 mb-4">
               <h6 className="mb-4 mt-3">Social Links</h6>
               <ul className="list-unstyled footer-list">
                  <li><a className={Styles.footertextt} href="#">Facebook</a></li>
                  <li><a className={Styles.footertextt} href="#">Twitter</a></li>
                  <li><a className={Styles.footertextt} href="#">Linkedin</a></li>
                  <li><a className={Styles.footertextt} href="#">Github</a></li>
               </ul>
            </div>

            <div className="col-md-3 mb-4">
               <h6 className="mb-4 mt-3">Subscribe Newsletter</h6>
               <form className="subscription" action="javascript:void(0)" method="post">
                  <div className="position-relative">
                     <i className="ti-email email-icon"></i>
                     <input type="email" class="form-control" placeholder="Your Email Address"/>
                  </div>
                  <button className={Styles.subscribebutton} type="submit">Subscribe Now</button>
               </form>
            </div>
         </div>
       
         <hr />
         <div className="text-center">
            <p className="content">&copy; 2023 - Design &amp; Develop By <a href="https://themefisher.com/" target="_blank">Blaze Media</a></p>
         </div>
      </div>
   </footer>
    
    </>
  )
}

export default footer