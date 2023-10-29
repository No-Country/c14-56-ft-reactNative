import { useCookies } from 'react-cookie';
import "./CreatePost.css";
import Post from "@Post";
import { useState, useEffect } from 'react';
import axios from 'axios';


const CreatePost = () => {
  const setPostDate = new Date()

  const [post, setPost] = useState({
    description: '',
    userId: '',
    // createdAt: ''
  });

  const [posts, setPosts] = useState([]);

  const handleInput = (event) => {
    setPost({ ...post, description: event.target.value }); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/api/v1/publications/all/653bd4c8952a267fbd8e9323', post)
      .then(response => {
        setPosts([response.data.data, ...posts]);
        setPost({ description: '' }); 
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    console.log(posts)
  }, [posts])

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/publications/all/653bd4c8952a267fbd8e9323')
      .then(response => setPosts(response.data.data))
      .catch(err => console.log(err));

  }, []);


  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué deseas compartir?"
            value={post.description} // Cambiar 'body' a 'description'
            onChange={handleInput}
            name="description" // Cambiar 'body' a 'description'
          />
          <button className="btn btn-primary" type="submit">Post</button>
        </form>
        <div>
          {Array.isArray(posts) ? (
            posts.map((post, index) => (
              // console.log(post)
              <div key={index} ></div>
              // <Post
              //   key={index}
              //   userName={post.userId || 'Usuario Desconocido'} // Manejar el caso en que userId no esté definido
              //   postContent={post.description}
              //   postDate={post.createdAt}
              // />
            ))
          ) : (
            <p>No hay publicaciones disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost