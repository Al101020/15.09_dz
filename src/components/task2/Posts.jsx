import fetchPosts from './fetchPosts';

export default function CrudPosts() {
  fetchPosts();

  return (
    <div className='crudPosts'></div>
  )
}