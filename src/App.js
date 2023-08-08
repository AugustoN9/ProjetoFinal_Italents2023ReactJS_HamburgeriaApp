import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import DelProduct from './pages/DelProduct';
import ProductInfo from './pages/ProductInfo';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />            
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } /> 
          <Route path='/product/:id' element={
            <ProtectedRoute>
              <ProductInfo />
            </ProtectedRoute>
          } />
          <Route path='/admin/addProd' element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } /> 
          <Route path='/admin/editProd/:id' element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          } /> 
          <Route path='/admin/delProd/:id' element={
            <ProtectedRoute>
              <DelProduct />
            </ProtectedRoute>
          } /> 
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
       
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
