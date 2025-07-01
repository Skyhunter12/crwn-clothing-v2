import './category.styles.scss';
import React from 'react';


const CategoryItem = ({ category }) => {
  let { id, title, imageUrl, subtitle } = category;
  return (
    <div className='category-container'>
      <img style={{ borderRadius: '5px' }} className="category-image" src={imageUrl} alt={title} />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
