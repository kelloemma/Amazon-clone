import React, { useContext} from "react";
import Rating from "@mui/material/Rating";
import './product.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/DataProvider';
import { Type} from '../../../utility/actionType';

const ProductCard = ({product,flex,render}) => {
  const {image,title,id,rating,price,description} = product;

const [{basket},dispatch] = useContext(DataContext)
  console.log( basket.length);

  

const addtoCart = () =>{

  dispatch({
    type: Type.ADD_TO_BASKET,
    item: { image, title, id, rating, price, description }
  });
   
}

const removeFromCart = (id) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
 id: id
  });
};


    return (
      <div className="cardContainer">
        <Link to={`/products/${product.id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          <div className="rating">
            {/* rating */}
            <Rating value={rating.rate} precision={0.1} />
            {/* count */}
            <small>{product.rating.count}</small>
          </div>
          <div className="price">
            {/* price */}
            {`$${price}`}
          </div>
          <div className={`${render ? "noButton" : "button"}`}>
            <button onClick={addtoCart}>add to cart</button>
            

             <button onClick={() => removeFromCart(id)}> remove from cart</button> 
          </div>
        </div>
      </div>
    );
}

export default ProductCard;
