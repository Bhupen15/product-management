import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    //hello Bhupendra Choudhary
    <BrowserRouter className="App">


      <Routes >
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/" element={<ProductForm />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;
