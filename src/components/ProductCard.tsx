import React from 'react';
import '../styles/ProductCard.css';

interface ProductCardProps {
    name: string;
    manufacturer: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  
  function ProductCard({ name, manufacturer, description, price, imageUrl }: ProductCardProps) {
    return (
      <div className="product-card">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-manufacturer">{manufacturer}</p>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <button className="buy-button">Buy</button>
        </div>
      </div>
    );
  }
  

export default ProductCard;
