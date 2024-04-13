import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../data/ProductData";

function ProductPage() {
  const { productId } = useParams();
  const thisProduct = ProductData.find((prod) => prod.id === productId);
  return (
    <div>
      <h2>{thisProduct.id}</h2>
    </div>
  );
}

export default ProductPage;
