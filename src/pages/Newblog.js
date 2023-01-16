import React from 'react'
import Styles from '../theme/blog.module.css'
import Head from 'next/head';
const Newblog = () => {
  return (
   
	
	<>
     <Head>
	<title>Blog Page</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/> 
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> */}
</Head>

<div className={Styles.container}>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>Exploring around</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>A new trail you can't miss</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>Inside the Outdoors</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>Essential hiking hacks</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>Discovering this hidden gem</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.carditem}>
      <div className={Styles.cardimage}>
      </div>
      <div className={Styles.cardinfo}>
        <h2 className={Styles.cardtitle}>1 Day routes for this weekend</h2>
        <p className={Styles.cardintro}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Newblog