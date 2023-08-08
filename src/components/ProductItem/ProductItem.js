import React from 'react'
import image from '../../assets/hamburgues-molho-marinada.png'


const ProductItem = ({ product }) => {
  return (
    <div className='bg-[rgba(211,211,221,0.1)] border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 hover:bg-[rgba(211,211,211,0.4)] p-4 rounded-lg relative'>
        <span className='bg-white-100 border border-red-500 rounded-full text-primary text-lg font-semibold px-4 py-1 inline-block mb-4'>{product.categoria}</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={image}  alt="" />
        <div className='flex flex-col items-center my-3 spacee-y-2'>
            <h1 className='text-gray-900 text-lg'>{product.nome}</h1>
            <p className='text-gray-500 text-sm text-center'> {product.descricao}</p>
            <h2 className='text-gray-900 text-2xl font-bold'>R$ {product.precoUnitario}</h2>
            <p className='text-gray-500 text-sm text-center'> Código de Barra [{product.codigoBarra}]</p>
            <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:scale-105'>Pedir Agora</button>
        </div>
    </div>
  )
}

export default ProductItem;
