import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Header/main.css";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className='card'>
      <Link to={`/product/${product._id}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </Link>
      <div className='card-body'>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className='row mt-5'>
          <div className='price'>${product.price}</div>
          <div className='BuyBtn'>
            <Link to={`/product/${product._id}`}>
              <button type='button' className='small'>
                <Link to={`/product/${product._id}`}>Buy Now</Link>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
