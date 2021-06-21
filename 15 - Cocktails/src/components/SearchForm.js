import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {text, handleTextChange} = useGlobalContext()

  return (
    <div id="searchform_container" >
      <form id="searchform" autoComplete="on">
        <label name="fname" id="searchform_label">Search Your Favorite Cocktail</label>
        <input type="text" htmlFor="fname" id="searchform_input" value={text} onChange={(e) => handleTextChange(e.target.value)}/>
      </form>
    </div>
  )
}

export default SearchForm
