import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Title = () => {
    return(
        <div id="list_title_container">
            <h2>React Projects (Part 1)</h2>
            <a id="list_title_link" href="https://github.com/Hani-ALHamad/React-Projects-part-1" target="_blank" rel="noreferrer">See Projects on GitHub <div id="list_title_link_icon"><FaGithub /></div></a>
        </div>
    )
}

export default Title