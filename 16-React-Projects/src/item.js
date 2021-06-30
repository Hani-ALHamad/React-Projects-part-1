import React, { useContext } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AppContext } from './context'

const Item = ({item, index}) => {
  const { changeCurrentIndex } = useContext(AppContext)

  return(
    <div className="item_container">
      <img className="item_img" src={item.img} alt={item.name}/>
      <div className="item_name">{item.name}</div>
      <div className="item_buttons_box">
        <a className="item_project_button" href={item.url} target="_blank" rel="noreferrer">Go to Project&ensp; <FiExternalLink /></a>
        <Link className="item_details_button" onClick={() => changeCurrentIndex(index)} to={`/details/${item.details}`}>See more</Link>
      </div>
      <div className="item_tech_box">
        {item.tech.map((one) =>(
          <span className={`item_tech_item ${one.color}`}>{one.name}</span>
        ))}
      </div>
    </div>
    )
}

export default Item
