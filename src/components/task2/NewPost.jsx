import { useEffect, useState } from 'react';

export default function NewPost() {
  const [newPost, setNewPost] = useState('');
  
  const onChange = ({ target }) => {
    setNewPost(target.value);    // console.log(target.value);
  }
  
  const clickNewPost = (e) => {
    e.preventDefault();
    console.log(newPost);
    setNewPost('');
  }

  return (
    <div className='newPost' onSubmit={clickNewPost}>
      <form autoComplete='off'>
        <input 
          type='text' 
          id='inputNewPost' 
          name='inputNewPost'
          value={newPost}
          onChange={onChange}
          placeholder="Пишим что хотим"
          required
        />
        <button type="submit" id='btnNewPost'>Создать пост</button>
      </form>
    </div>
  )
}