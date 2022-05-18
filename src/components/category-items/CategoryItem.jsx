import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CategoryItem.styles.scss'
const CategoryItem = ({category}) => {

  const {imageUrl, title, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = ()=>{
    navigate(route);
    // console.log(`shop/${title}`);
  }

  return (
   
    <div className="category__container" onClick={onNavigateHandler}>
      <div className="category__bg--img" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="category__body__container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
      
    </div>

    

  
  )
}

export default CategoryItem