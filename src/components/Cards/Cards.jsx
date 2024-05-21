import React, { useContext } from 'react'
import './Cards.scss'
import Card from '../Card/Card'

function Cards({data}) {
  return (
    <React.Fragment>
      <div className="crd">
        <h2>Popular Courses</h2>
    <div className='cards'>
      {
        data.slice(0,3).map((item,index)=>(
           <Card  item={item} key={index} />
        ))
      }
    </div>
    </div>
    </React.Fragment>
  )
}

export default Cards
