import { useCookies } from 'react-cookie';
import "./CreatePost.css";
import Post from "@Post";
import { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [post, setPost] = useState({
    description: '',
  });

  const [posts, setPosts] = useState([]);

  const { userId } = useCookies(['userId'])[0];

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:3001/api/v1/publications/all/${userId}`, post)
      .then(response => {
        setPosts([response.data, ...posts]);
        setPost({ description: '' });
      })
      .catch(err => console.log(err));
  }

  const handleUpdateLikes = (postId, delta) => {
    // Actualiza el estado de "likes" en CreatePost utilizando la variable posts y postId
    // Puedes usar .map para actualizar el conteo de "likes" de una publicación específica.
    setPosts(prevPosts =>
      prevPosts.map(prevPost =>
        prevPost._id === postId
          ? { ...prevPost, likesCount: prevPost.likesCount + delta }
          : prevPost
      )
    );
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/publications/all/${userId}`)
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <div className='bg-blue'>
          <form onSubmit={handleSubmit} className="bg-slate-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                ¿Qué deseas compartir?
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Escribe tu publicación aquí"
                value={post.description}
                onChange={handleInput}
                name="description"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
        <div>
          {Array.isArray(posts) ? (
            posts.map(post => (
              <Post
                key={post._id}
                userId={userId}
                userName={post.userId}
                postContent={post.description}
                postId={post._id}
                postDate={post.createdAt}
                handleUpdateLikes={handleUpdateLikes}
                likesCount={post.likesCount}
                handleLikeClick={post.handleLikeClick}
              />
            ))
          ) : (
            <p>No hay publicaciones disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;