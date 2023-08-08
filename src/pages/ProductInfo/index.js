import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import imageProd from '../../assets/hamburgues-molho-marinada.png'
import { findAllProducsAPI } from '../../services/productService';

const ProductInfo = () => {

  const [ quantity, setQuantity ] = useState(1);
  const { id } = useParams();
  const [ product, setProduct ] = useState({});

  useEffect(() => {
    getProductById();
  },[]) 

  const getProductById = async () => {
    const response = await findAllProducsAPI(id);
    setProduct(response.data);
  }

  const addToCart = () => {
    const productCart = [
      {
        ... product,
        quantity: quantity,
      }
    ]
    const storageCart = JSON.parse(localStorage.getItem(productCart));
    if(storageCart){
      productCart.push([
        ...storageCart
      ])
      console.log(productCart)
    }
    localStorage.setItem('productCart', JSON.stringify(productCart));
  }


  return (
    <main className='max-w-screen mx-auto px-6 my-16'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 '>
          <div className='order-2 md:order-1 lg:order-1 flex flex-col justify-center '>
            <h1 className='text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none'>
              Produto 1 
            </h1>
            <p className='text-center md:text-left lg:text-left text-sm text-gray-500 leading-relaxed select-none'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div>
              <h2>
                R$ 10.00 
              </h2>
              <div className='flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full'>
                <AiOutlineMinusSquare 
                  onClick={ () => { quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)}}
                  className='text-2xl  w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer p-1' />
                <span className='text-lg text-gray-700 poppins select-none'>{quantity}</span>
                <AiOutlinePlusSquare 
                  onClick={ () => { setQuantity( quantity + 1) }}
                  className='text-2xl  w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer p-1' />
              </div>
            </div>
            <div className='mt-8 flex items-ceenter jusntify-center md:justify-start lg: justify-start'>
              <button onClick={addToCart} className='flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105'>
                <FiShoppingCart />
                <span>Adicionar no Carrinho</span>
              </button>
            </div>
          </div>
          <div className='order-1 md:order-2 lg:order-2'>
            <img src={imageProd} width='70%' alt='imagem do produto' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductInfo;
