import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';

const ProductDetail = () => {
    const {productid} = useParams();
  const [product,setProduct] = useState()

    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${productid}`)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [productid]);
  console.log(product);
    return (
      <Layout>
        {product ? <ProductCard product={product} /> : <p>Loading...</p>}
        
      </Layout>
    );
}

export default ProductDetail;
