import React from 'react'
import CategoryItem from '../category-items/CategoryItem'
import './Directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory__container">
      {categories.map(category =>(
        <CategoryItem key={category.id} category={category} />
      ))}
    
    </div>
  )
}

export default Directory