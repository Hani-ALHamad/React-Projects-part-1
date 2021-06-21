import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return (
    <div id="hero_container">
      <div id="hero_text_container">
        <h1 id="hero_title">
          Payments infrastructure
          for the internet
        </h1>
        <div id="hero_text">
          Millions of companies of all sizes—from startups to Fortune 500s—use 
          Stripe’s software and APIs to accept payments, 
          send payouts, and manage their businesses online.
        </div>
        <button id="hero_button">Start now</button>
      </div>
      <img id="hero_img" src={phoneImg}/>
    </div>
  )
}

export default Hero
