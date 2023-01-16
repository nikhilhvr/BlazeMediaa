import React from 'react'
import Head from 'next/head';
import Styles from '../theme/blogpage.module.css'
import Footer from 'sections/footer';
const blog1 = () => {
  return (

    <>
        <Head>
	<title>Blog Page</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>
<section className="section mt-5 container-fluid">
  <div className="container">
    <artictle className="row mb-4">
      <div className='col-lg-12 mx-auto mb-4'>
    <h1 className={Styles.blogheading}>The Untold Secret About Scaling Your Community (2023)</h1>
    <ul class="list-inline post-meta mb-3">
					<li class="list-inline-item"><i class="ti-user mr-2"></i><a href="author.html">Abhinik</a>
					</li>
					<li class="list-inline-item">Date : Dec 27, 2022</li>
					<li class="list-inline-item">Categories : <a href="#!" class="ml-1">Covid </a>
					</li>
					<li class="list-inline-item">Tags : <a href="#!" class="ml-1"></a> ,<a href="#!" class="ml-1"></a> 
					</li>
				</ul>
    </div>
    <div className="col-12 mb-3">
      <div className='post-slider'>
        <img src="https://assets.website-files.com/6194b68c0434bd8de3ef920f/6216497f8e75dc44de3d908b_ultimatekey%20to%20community%20growth--p-1080.jpeg" alt="" class='img-fluid rounded'  />
      </div>
    </div>
    <div className='col-lg-10 mx-auto'>
      <div className="content">
        
					<h1 id="heading-3">Revealing the secret to grow your community exponentially</h1>
          <p className={Styles.subheading}>With our own Discord community, we ran hundreds of giveaways, contests, private events, just for folks who were willing to invite other members. 

Don't underestimate the power of a common man? (No, that old huh!)

You should NOT underestimate the power of users inviting other users!

There are plenty of creative, hard working people out there who never do well at life or business, and that is primarily because they underestimate the power and influence of other people. They never set out to utilize it and prefer to do everything by themselves. In this blog article, I want to talk about a hack that uses other people’s power in business: whether that be communities, apps, services, or physical products. This hack is invaluable for running communities, because it significantly lowers CACs.

I’m also going to let you in on a secret — very few large companies have achieved massive scale through traditional techniques, especially consumer companies. While they all use advertising, influencer marketing, etc.; all of these techniques have large costs of acquisition and are used to “amplify” a technique that most people don’t even realize exists.

That technique is the darling of Silicon Valley growth experts, and is one I’m going to share with you here.</p>
					
          <hr />
          <h1>The Story of Referrals</h1>
          <p className={Styles.subheading}>
          You've probably heard of the nutrition company, Herbalife. It receives a lot of hate for using a technique called MLM, which stands for multilevel market. Despite having Ronaldo as a brand sponsor, Herbalife does not grow primarily through marketing or influencer deals. It grows because financially motivated people are better salespeople than large influencers, when engaged correctly.
          </p>
          <div className='img-fluid' style={{width:"100%"}}>
          <img src="https://assets.website-files.com/6194b68c0434bd8de3ef920f/6216497f8e75dc44de3d908b_ultimatekey%20to%20community%20growth--p-1080.jpeg" alt="" className='img-fluid rounded'/></div>
          <hr />
          <h4 id="youtube-video">Youtube video</h4>
					<div className="container-fluid">
          <iframe className='img-fluid rounded' width="1000" height="100" src="https://www.youtube.com/embed/OoDC9p0yFTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					
					</div>
      </div>
    </div>

		

    </artictle>
  </div>
</section>


   <Footer/>



    </>
  )
}

export default blog1