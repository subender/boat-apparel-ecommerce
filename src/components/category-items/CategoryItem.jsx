import React from 'react'
import './CategoryItem.styles.scss'
const CategoryItem = ({category}) => {

  const {imageUrl, title} = category;

  return (
   
    <div className="category__container">
      <div className="category__bg--img" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="category__body__container">
        <h2>Hats</h2>
        <p>Shop Now</p>
      </div>
      
    </div>

    

  
  )
}

export default CategoryItem