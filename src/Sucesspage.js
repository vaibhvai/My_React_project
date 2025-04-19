// src/SuccessPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
   const timer = () => {
    setTimeout(() => {
        navigate.push('/')
    }, 4000);
   }
   return () => clearTimeout(timer);   
    }, [navigate])
  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <p>Thank you for your submission.</p>
    </div>
  );
};

export default SuccessPage;