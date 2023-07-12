import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const params = useParams();
  console.log(params);
  return (
    <h1>Viewing details about {params.name}</h1>
  )
};

export default ProductDetails;