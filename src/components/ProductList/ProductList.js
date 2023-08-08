import React, { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import productsMock from '../../Mock/productsMock';

const ProductList = () => {
    const [categoria, setCategoria] = useState('Gourmet');
    const [products, setProducts] = useState(productsMock);


  return (
    <section className='my-1 max-w-screen-xl mx-auto px-3'>
      <div className='flex items-center justify-center space-x-6  w-full  '>
        <p className={categoria === 'Gourmet' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Gourmet')} >Gourmet</p>
        <p className={categoria === 'Tradicional' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Tradicional')} >Tradicional</p>
        <p className={categoria === 'Vegetariano' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Vegetariano')} >Vegetariano</p>
        <p className={categoria === 'Light' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Light')} >Light</p>
        <p className={categoria === 'Bebidas' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Bebidas')} >Bebidas</p>
        <p className={categoria === 'Acompanhamento' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Acompanhamento')} >Acompanhamento</p>
        <p className={categoria === 'Promocional' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Promocional')} >Promocional</p>
      </div>
      <div 
         
         className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12
          w-full my-10'>
            {products.map(product => (
              <ProductItem key={product._id} product ={product} />
            ))}

      </div>
    </section>
  )
}

export default ProductList;
