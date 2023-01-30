import React from 'react'
import Styles from '../theme/styles.module.css'
import Linkk from "next/link";
const growthpage = () => {
  return (
    <div className={Styles.yesorno}>
    <div className={Styles.h11}>
      {/* <FaDAndD /> */}
      DO YOU WANT TO SCALE YOUR BUSINESS ?
    </div>
    <Linkk href="/yespage">
    <button class={Styles.button1}>
   
        <a>
      
      Yes, Grow My Company</a>
    </button>
    </Linkk>
    <Linkk href="/nopage">
    <button class={Styles.button2}><a>No, No Growth Please</a></button></Linkk>
  </div>
  )
}

export default growthpage