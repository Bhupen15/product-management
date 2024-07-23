import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';
import {useNavigate} from 'react-router-dom'


const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

 
  const BackToProductList =()=>{
    console.log("Hello>>>>>");
    navigate('/productlist');
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setError('All fields are required');
      return;
    }

    axios.post('/api/productform', { name, description, price: Number(price) })
      .then(response => {
        setSuccess('Product added successfully');
        setName('');
        setDescription('');
        setPrice('');
        navigate('/productlist');
      })
      .catch(error => {
        setError('Failed to add product');
      });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      
      </form>

      <div className='addlist'>
        <button onClick={BackToProductList}>Back to Add List</button>
      </div>
    </div>
  );
};

export default ProductForm;
