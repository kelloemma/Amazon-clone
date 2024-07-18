import React, {useEffect,useState}from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';
import "./product.css";
const Product = () => {
    const[products,setProducts] = useState([]);

    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products?limit=18").then((res) =>{
            setProducts(res.data)
            .catch(err)
        });
    } ,[])
    return (
        <div className='productContainer'>
            {
                products.map((singleProduct) =>(
                    <ProductCard product ={singleProduct} key={singleProduct.id}/>
                ))
            }
        </div>
    );
}

export default Product;
