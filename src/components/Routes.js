import React from 'react';
import { Routes as RRRoutes, Route } from 'react-router-dom';
import Home from '../Home';
import FeaturedProducts from '../products/FeaturedProducts';
import ProductDetails from '../products/ProductDetails';
import ProductsList from '../products/ProductsList';
import CreateProduct from '../products/CreateProduct';
import MyCart from '../products/MyCart';

function Routes() {
  return (
    <RRRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/featured-products" element={<FeaturedProducts />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route exact path="/products" element={<ProductsList />} />
      <Route exact path="/products/:name" element={<ProductDetails />} />
      <Route exact path="/products/new" element={<CreateProduct />} />
    </RRRoutes>
  )
};

export default Routes;