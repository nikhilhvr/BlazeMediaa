import React from 'react'
import Styles from '../theme/blog.module.css';
import Link from "next/link";
import Head from 'next/head';
const blogsection = () => {
  return (
    <>
     <Head>
	<title>Blog Page</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>
 
			<div className={Styles.headersectionmain}>
				{/* <div className="col-md-8 col-lg-6"> */}
					<div className={Styles.headersection}>
						<h3 className={Styles.smalltitle}>Our Blogs</h3>
						<h2 className={Styles.title}>The Blog Section</h2>
					</div>
				</div>
        

        {/* <section class="section">
	<div class="container">
		<div class="row">
			<div class="col-lg-8  mb-5 mb-lg-0">
				<article class="row mb-5">
					<div class="col-12">
						<div class="post-slider">
							<img loading="lazy" src="images/post/post-6.jpg" class="img-fluid" alt="post-thumb"/>
							<img loading="lazy" src="images/post/post-1.jpg" class="img-fluid" alt="post-thumb"/>
							<img loading="lazy" src="images/post/post-3.jpg" class="img-fluid" alt="post-thumb"/>
						</div>
					</div>
					<div class="col-12 mx-auto">
						<h3><a class="post-title" href="post-elements.html">Elements That You Can Use To Create A New Post On This Template.</a></h3>
						<ul class="list-inline post-meta mb-4">
							<li class="list-inline-item"><i class="ti-user mr-2"></i>
								<a href="author.html">John Doe</a>
							</li>
							<li class="list-inline-item">Date : March 15, 2020</li>
							<li class="list-inline-item">Categories : <a href="#!" class="ml-1">Photography </a>
							</li>
							<li class="list-inline-item">Tags : <a href="#!" class="ml-1">Photo </a> ,<a href="#!" class="ml-1">Image </a>
							</li>
						</ul>
						<p>Heading example Here is example of hedings. You can use this heading by following markdownify rules. For example: use # for heading 1 and use ###### for heading 6. Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Emphasis Emphasis, aka italics, with asterisks or underscores.</p> <a href="post-elements.html" class="btn btn-outline-primary">Continue Reading</a>
					</div>
				</article>
        </section>
   */}

    
 
  </>
    
    
  )
}

export default blogsection