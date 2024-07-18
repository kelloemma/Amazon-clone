import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/product/ProductCard";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
const total = basket.reduce((amount,item)=>{
  return item.price + amount
},0)
 


  return (
    <Layout>
      <div className="container">
        <div className="cartContainer">
          <h1>shopping Cart</h1>
          <hr />
          {basket?.length == 0 ? (
            <p>Your Cart is empty</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard key={i} product={item} flex={true} render={true} />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>subtotal ({basket?.length} items)</p>
              <p> amount ={`$${total}`} </p>
            </div>
            <span>
              <input type="Checkbox" />
              <small>this order contains a gift</small>
            </span>
            <Link to="/payment"> proceed to checkout</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
