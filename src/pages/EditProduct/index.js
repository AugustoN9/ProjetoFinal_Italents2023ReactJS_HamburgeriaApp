import React, { useEffect, useState } from 'react'
import { MultiSelect }  from 'react-multi-select-component';
import { useNavigate, useParams } from 'react-router-dom';
import { findProductById, updateProductAPI } from '../../services/productService';
import { findAllcategories } from '../../services/categoryService';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
    categoria: [{_id: ""}],

  });

  const [ categories, setCategories ] = useState([]);
  const [ selected, setSelected ] = useState([]);

  useEffect(() => {
    getCategories();
    getProductById();
  }, [])

  const getProductById = async () => {
    const response = await findProductById(id);
    console.log('Produto por id', response.data);
  }

  const getCategories = async () => {
      const response = await findAllcategories();
      const categoriesSelect = response.data.map((categoria) => {
        return{
          value: categoria._id,
          label: categoria.nome
        }
      })
      console.log(response.data);
      console.log(categoriesSelect);
      setCategories(categoriesSelect);
  }

  const handleChangeValues = (evento) => {
      setProductForm({
          ...productForm,
        [evento.target.name]: evento.target.value
      })
      console.log(productForm);
  }

  const handleSubmit = async (evento) => {
      evento.preventDefault();
      const categoriesId = selected.map(category => {
        return{
          _id: category.value
        }
      })
      const product = {
        ...productForm,
        categorias: categoriesId,
        precoUnitario: parseInt(productForm.precoUnitario),
        codigoBarra: parseInt(productForm.codigoBarra)
      }

      const response = await updateProductAPI(id, productForm);
        if(response.data){
          alert(`Produto ${response.data.nome} atualizado com sucesso!`)
          navigate('/admin')
        }
  }

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-2xl text-gray-600'>Cadastro de Produto</h1>
        </div>
        <form className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
           <div className=''>
              <label htmlFor='nome' className='text-gray-500'>Nome</label>
              <input type='text' id='nome' name='nome' className='bg-blue-100 w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 transition duration-300 border-gray-300 focus:shadow-xl' onChange={handleChangeValues} value={productForm.nome} required />
              <label htmlFor='descricao' className='text-gray-500' >Descrição</label>
              <textarea name='descricao' id='descricao' cols={30} rows={5} className='bg-blue-100 w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 transition duration-300 border-gray-300 focus:shadow-xl' onChange={handleChangeValues} value={productForm.descricao} required ></textarea>
              <label htmlFor='codigoBarra' className='text-gray-500'>Código de Barra</label>
              <input type='number' id='codigoBarra' name='codigoBarra' className='bg-blue-100 w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 transition duration-300 border-gray-300 focus:shadow-xl' onChange={handleChangeValues} value={productForm.codigoBarra} required />
           </div>
           <div>
              <label htmlFor='preco' className='text-gray-500' value={productForm.precoUnitario} >Preço</label>
              <input type='numnber' id='preco' name='preco' className='bg-blue-100 w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 transition duration-300 border-gray-300 focus:shadow-xl' onChange={handleChangeValues} required />
              <label htmlFor='imagem' className='text-gray-500' value={productForm.imagem} >Imagem</label>
              <input type='text' id='imagem' name='imagem' className='bg-blue-100 w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 transition duration-300 border-gray-300 focus:shadow-xl' onChange={handleChangeValues} required />
              <label htmlFor='categoria' className='text-gray-500'>Categoria</label>
              <MultiSelect 
                  options={categories}
                  value={selected}
                  onChange={setSelected}
                  labelledBy='Select'
              />
              <div className='mt-8'>
                <button onSubmit={handleSubmit} className='w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Editar</button>
              </div>
           </div>
        </form>
    </section>
  )
}

export default EditProduct;

