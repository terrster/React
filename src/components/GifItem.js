import React from 'react'

export const GifItem = ({id, title, url}) => {
  return (
    <div key={id} className='card-item'>
        <img src={url} alt={title}/>
        <span>{title}</span>
    </div>              
  )
}