import './Crud.css';
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import PostNew from './pages/PostNew';
// import { useEffect, useState } from 'react'; // useNavigate()
// import { useNavigate } from 'react-router-dom';


function Crud() {
  return (
    <div className='task2'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/new' element={<PostNew />} />
      </Routes>
    </div>
  )
};

export default Crud;