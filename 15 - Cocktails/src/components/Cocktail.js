import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({item}) => {

  return (
    <div className="cocktail_item">
      <img alt={item.strDrink} className="cocktail_item_img" src={item.strDrinkThumb}/>
      <div className="cocktail_item_text">
        <div className="cocktail_item_title">{item.strDrink}</div>
        <div className="cocktail_item_glass">{item.strGlass}</div>
        <div className="cocktail_item_type">{item.strCategory}</div>
        <Link to={`/cocktail/${item.idDrink}`} className="cocktail_details_button">details</Link>
      </div>
    </div>
  )
}

export default Cocktail
