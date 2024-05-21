import React, { useContext } from 'react'
import MainContext from '../../context/context'


function Card({item}) {
    const {addBasket}=useContext(MainContext)
  return (
    <div className='card'>
      <img src={item.image} alt="" />
      <h5>{item.title}</h5>
      <div className="buy">
      <span>{item.price} $</span>
      <button onClick={()=>{
        addBasket(item)
      }}>Add to Basket</button>
      </div>
    </div>
  )
}

export default Card
