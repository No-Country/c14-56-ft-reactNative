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


  const handleLikeClick = async (postId, liked) => {
    try {
      if (liked) {
        // Usuario deshace el like
        await axios.delete(`http://localhost:3001/api/v1/likes/${postId}`);
      } else {
        // Usuario da like
        await axios.post(`http://localhost:3001/api/v1/likes/${postId}`);
      }

      // Actualiza el conteo de likes en el estado
      const updatedPosts = posts.map((p) => {
        if (p._id === postId) {
          return {
            ...p,
            likesCount: liked ? p.likesCount - 1 : p.likesCount + 1,
            liked: !liked,
          };
        }
        return p;
      });

      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error al manejar el like', error);
    }
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
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué deseas compartir?"
            value={post.description}
            onChange={handleInput}
            name="description"
          />
          <button className="btn btn-primary" type="submit">Post</button>
        </form>
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
                handleLikeClick={handleLikeClick}
                likesCount={post.likesCount}
                liked={post.liked}
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