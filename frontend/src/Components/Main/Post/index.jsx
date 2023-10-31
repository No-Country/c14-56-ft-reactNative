// Componente Post
import UserHeader from '@UserHeader';
import PostContent from '@PostContent';
import InteractionButtons from '@PostButtons'; // Asegúrate de importar el componente correctamente
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ avatarUrl, userName, userHandle, postContent, postDate, postId, userId, updateLikes, handleUpdateLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState();
  const [loading, setLoading] = useState(true);

  const fetchLikes = async() => {
    await axios.get(`http://localhost:3001/api/v1/likes/${postId}/${userId}`)
    
      .then(response => {
        console.log(response)
        setLiked(response.data.isLiked);
        setLikesCount(response.data);
        setLoading(false); // Marcar que la carga se ha completado
      })
      .catch(err => {
        console.log(err);
        setLoading(false); // Marcar que la carga se ha completado incluso en caso de error
      });
  }; console.log(fetchLikes());


  useEffect(async() => {
   await fetchLikes(); console.log(liked, likesCount);
  }, [postId, userId]); 

  const handleLike = (userId) => {
    if (postId) {
      axios.post(`http://localhost:3001/api/v1/likes/${postId}/${userId}`)
        .then(response => { 
          if (response.data.isLiked) {
            setLiked(true);
            setLikesCount(likesCount + 1);  // Incrementa el contador localmente
            handleUpdateLikes(postId, 1); // Actualiza el contador en el componente padre
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log('postId no está definido en InteractionButtons');
    };
  };

  const handleLikeClick = () => {
    handleLike(userId);
  };

  return (
    <div className="post">
      <UserHeader
        avatarUrl={avatarUrl}
        userName={userName}
        postDate={postDate}
        userHandle={userHandle}
      />
      <PostContent
        postContent={postContent}
        postDate={postDate}
      />
      {loading ? (
        <p className='text-white'>Cargando...</p>
      ) : (
        <InteractionButtons
          liked={liked}
          handleLikeClick={handleLikeClick}
          likesCount={likesCount}
          postId={postId}
          userId={userId}
          handleUpdateLikes={handleUpdateLikes}
        />
      )}
    </div>
  );
};

export default Post;
