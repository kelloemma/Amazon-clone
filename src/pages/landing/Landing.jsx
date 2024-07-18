import React from "react";
import Carousell from "../../components/carousel/Carousell";
import Product from "../../components/product/Product";
import Catagory from "../../components/catagory/Catagory";
import Layout from "../../components/layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <Carousell />
      <Catagory />
      <Product />
    </Layout>
  );
};

export default Landing;
