import React from 'react'
import {Link} from 'react-router-dom'

const FOF = () => {
  return (
    <div id="FOF_container">
        <div id="FOF_title">404</div>
        <div id="FOF_text">The page you are looking for does not exist.</div>
      <Link id="FOF_link" to="/">Go back</Link>
    </div>
    )
}

export default FOF