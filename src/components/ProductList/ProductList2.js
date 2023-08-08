import React, { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import productsMock from '../../Mock/productsMock';

const ProductList2 = () => {
    const [categoria, setCategoria] = useState('Gourmet');
    const [products, setProducts] = useState(productsMock);


  return (
    <section className='my-1 max-w-screen-xl mx-auto px-3 w-full'>
      <nav className='flex justify-center align-middle w-full'>
        <ul className='flex items-center justify-start space-x-6 gap-4 overflow-y-auto'>
          <li className={categoria === 'Gourmet' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Gourmet')} >Gourmet</li>
          <li className={categoria === 'Tradicional' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Tradicional')} >Tradicional</li>
          <li className={categoria === 'Vegetariano' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Vegetariano')} >Vegetariano</li>
          <li className={categoria === 'Light' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Light')} >Light</li>
          <li className={categoria === 'Promocional' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Promocional')} >Promocional</li>
          <li className={categoria === 'Bebidas' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Bebidas')} >Bebidas</li>
          <li className={categoria === 'Acompanhamento' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Acompanhamento')} >Acompanhamento</li>
          <li className={categoria === 'Combos' ? 'active-menu bg-primary': 'menu'} onClick={() => setCategoria('Combos')} >Combos</li>
        </ul>
      </nav>
      
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

export default ProductList2;
