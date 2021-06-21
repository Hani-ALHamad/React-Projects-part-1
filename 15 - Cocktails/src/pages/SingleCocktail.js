import React, { useCallback, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const { currentItem, changeCurrentItem } = useGlobalContext()
  var length = 16
  const getCurrentItem = useCallback(async () => {
    const resposne = await fetch(url+id)
    const jsoned = await resposne.json()
    changeCurrentItem(jsoned.drinks[0])
  },[changeCurrentItem, id])
  useEffect(() => {
    changeCurrentItem("")
    getCurrentItem()
  }, [getCurrentItem, changeCurrentItem])
  
  if(currentItem.length === 0){
    return <Loading />
  } else {
    for (let index = 16; index < 32; index++) {
      if (Object.values(currentItem)[index] === null){
        length= index+1
        break
      }
    }
  }
  return (
    <div id="single_cocktail_container">
      <Link to="/" id="single_cocktail_back_button">back home</Link>
      <div className="cocktail_item_title">{currentItem.strDrink}</div>
      <div id="single_cocktail_content">
        <img id="single_cocktail_content_img" src={currentItem.strDrinkThumb} alt={currentItem.strDrink}/>
        <div id="single_cocktail_content_flex_for_text">
          <div className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Name :</span>{currentItem.strDrink}</div>
          <div className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Category :</span>{currentItem.strCategory}</div>
          <div className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Info :</span>{currentItem.strAlcoholic}</div>
          <div className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Glass :</span>{currentItem.strGlass}</div>
          <div className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Instructions :</span>{currentItem.strInstructions}</div>
          <span className="single_cocktail_content_text_right"><span className="single_cocktail_content_text_left">Ingredients :</span>{Object.values(currentItem).slice(17, length).map((item, index) => (<span key={index}>{item} </span>))}</span>
        </div>
      </div>
    </div>
  )
}

export default SingleCocktail
