import './Crud.css';
import NewPost from './NewPost';
import Posts from './Posts';
// import { useEffect, useState } from 'react';


function Crud() {
  return (
    <div className='task2'>
      <NewPost />
      <Posts />
    </div>
  )
};

export default Crud;