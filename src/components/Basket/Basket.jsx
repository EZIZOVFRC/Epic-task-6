import React, { useContext } from 'react'
import MainContext from '../../context/context'
import './Basket.scss'
function Basket() {
  const {basketItems,deleteBasket,addBasket}=useContext(MainContext)
  let full=0
  return (
    <div className="tab">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>
      <th scope="col">Add</th>
      <th scope="col">Count</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      basketItems.map((item,index)=>{
        full+=item.totalPrice
       return <tr key={index}>
      <th scope="row"><img src={item.item.image} alt=""  style={{width:'80px',height:'80px'}}/></th>
      <td>{item.item.title}</td>
      <td>{item.item.price}</td>
      <td>{item.totalPrice}</td>
      <td><button className='btn btn-primary' onClick={()=>{
        addBasket(item.item)
      }}>+</button></td>
      <td>{item.count}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        deleteBasket(item.item)
      }}>-</button></td>
    </tr>
      })
    }
   
  </tbody>
</table>
<h1>{full}</h1>
    </div>
  )
}

export default Basket
