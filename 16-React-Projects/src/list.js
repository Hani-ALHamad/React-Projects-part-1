import React from 'react' 
import Item from './item'
import main_data from './main_data'
import Title from './title'

const List = () => {
  return (
    <div id="list_container">
      <Title/>
      <div id="list_item_container">
        {main_data.map((item, index) =>(
          <Item key={item.id} item={item} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default List