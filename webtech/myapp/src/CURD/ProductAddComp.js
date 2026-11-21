import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAddComp = () => {
    const nav = useNavigate();
    const [myproduct,setMyproducts]=useState({
        pname:"",
        company:"",
        price:"",
        quantity:""
    });
    const inputChangeHandler =(event)=>{
        const{type,name,value} = event.target;
        setMyproducts({...myproduct,[name]:value});
    }
    const addData=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5050/product',myproduct).then(()=>{
            window.alert("product added");
        }).catch((error)=>{})

    }
  return (
    <div>
        <form>
            <label className='form-label'>Enter product name</label>
            <input type='text' name='pname' className='form-control' />

            <label className='form-label'>Enter product name</label>
            <input type='text' name='pname' className='form-control' />

            <label className='form-label'>Enter product name</label>
            <input type='text' name='pname' className='form-control' />

            <label className='form-label'>Enter product name</label>
            <input type='text' name='pname' className='form-control' />
            <button type='submit'></button>
        </form>
      
    </div>
    
  )
}

export default ProductAddComp
