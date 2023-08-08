import api from './api';

const findAllcategories = () => 
    api.get('/categoria/findAll')
        .then(( response ) => response )
        .catch(err => err)


export { findAllcategories }
