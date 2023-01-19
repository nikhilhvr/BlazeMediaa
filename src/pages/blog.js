import React from 'react'
import BlogSection from '../sections/blogsection';
import Head from 'next/head';
import Layout from 'components/layout';
import Growthpage from 'sections/growthpage';
const blog = () => {
  return (
    <>
     <Head>
	<title>Blog Page</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>
<div className="container-fulid">


      <Growthpage/>
      <BlogSection/>
      </div>
      </>

  )
}

export default blog