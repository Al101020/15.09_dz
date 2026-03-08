import fetchGetPosts from './fetchGetPosts';
import { useEffect, useState } from 'react';

export default function Posts(props) {
  fetchGetPosts(); //const posts = fetchPosts(); console.log(posts);
  
  useEffect(() => {
    console.log(props.clickBtnNewPost);
  }, [props.clickBtnNewPost]);

  return (
    <div className='posts'></div>
  )
}