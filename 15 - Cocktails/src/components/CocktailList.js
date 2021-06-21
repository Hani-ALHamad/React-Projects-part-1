import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {data, isLoading, error} = useGlobalContext()
  if(isLoading){
    return error === false ? <Loading /> : <h2 style={{textAlign:"center"}}>No Cocktails Matched Your Search Criteria</h2>
  }
  return (
    <div id="cocktail_list">
      <h2>Cocktails</h2>
      <div id="cocktail_list_grid">
        {data.map((item) =>(
          <Cocktail item={item} key={item.idDrink}/>
        ))}
      </div>
    </div>
  )
}

export default CocktailList
