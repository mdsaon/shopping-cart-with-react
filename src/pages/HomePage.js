import React from "react";
import ProductLists from "../components/products";
import data from "../data/products.json";

const HomePage = ()=>(
 <div>
     <ProductLists products={data.products} />
 </div>
);
export default HomePage;