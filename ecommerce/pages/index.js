import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>Produtos Mais Vendidos</h2>
        <p>Alto-falantes de muitas variações</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home;
