import React from 'react'
import ProductList2 from '../../components/ProductList/ProductList2';

const Home = () => {
  return (
    <>
      <section className='home-banner w-full px-3'>
        <div className='flex flex-col items-center justify-center  h-full'>
          <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>Os melhores hamburgers você encontra aqui!</h1>
        </div>
      </section>
      <ProductList2 />
    </>
  )
}

export default Home;

