import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main>
      <div id="error_title">404</div>
      <h3>The requested page cannot be found.</h3>
      <br/>
      <Link to="/" id="single_cocktail_back_button">back home</Link>
    </main>
  )
}

export default Error
