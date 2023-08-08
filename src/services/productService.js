import api from "./api";

const addProductAPI = (product) => 
    api.post('/produto/create', product)
        .then((response) => response)
        .catch((err) => err)

const findAllProducsAPI = (id, productEdit) => 
    api.put(`/produto/update/${id}`, productEdit)
        .then((response) => response)
        .catch((err) => err)

const findProductById = (id, productEdit) => 
    api.put(`/produto/update/${id}`, productEdit)
        .then((response) => response)
        .catch((err) => err)

const updateProductAPI = (id, productEdit) => 
    api.put(`/produto/update/${id}`, productEdit)
        .then((response) => response)
        .catch((err) => err)

const deleteProductAPI = (id) => 
    api.delete(`/produto/delete/${id}`)
        .then((response) => response)
        .catch((err) => err)

export { addProductAPI, findAllProducsAPI, findProductById, updateProductAPI, deleteProductAPI };