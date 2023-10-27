import Avatar from "@Avatar";
import "./CreatePost.css";
import Post from "@Post";
import { useState, useEffect } from 'react';
import axios from 'axios';


const CreatePost = () => {
  const [post, setPost] = useState({
    body: '',
  });

  const [posts, setPosts] = useState([]);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/api/v1/publications/all/:id", post)  // Reemplaza '/api/posts' con la URL correcta de tu propia API
      .then(response => {
        // Procesa la respuesta de tu API, si es necesario
        setPosts([response.data, ...posts]); // Añadir la nueva publicación al principio
        setPost({ body: '' });
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    // Cargar las publicaciones solo una vez al cargar el componente
    axios.get("http://localhost:3001/api/v1/publications/all/:id")  // Reemplaza '/api/posts' con la URL correcta de tu propia API
      .then(response => {
        // Procesa las publicaciones de tu API
        setPosts(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué deseas compartir?"
            value={post.body}
            onChange={handleInput}
            name="body"
          />
          <button className="btn btn-primary" type="submit">Post</button>
        </form>

        <div>
          {posts.map((post, index) => (
            <Post
              key={index}
              avatarUrl={post.avatarUrl} 
              userName={post.userName}   
              userHandle={post.userHandle} 
              postContent={post.body}
              postDate={post.postDate}   
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

