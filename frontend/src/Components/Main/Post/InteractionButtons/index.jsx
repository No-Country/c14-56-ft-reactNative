import './InteractionButtons.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from '@Comments'; // Asegúrate de importar correctamente el componente Comments

const InteractionButtons = ({ postId, userId }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isLiked = localStorage.getItem(`like-${postId}`);

    if (isLiked) {
      setLiked(true);
    }
  }, [postId]);

  const handleLikeClick = async () => {
    try {
      if (liked) {
        // Usuario deshace el "Me gusta"
        await axios.delete(`http://localhost:3001/api/v1/likes/${postId}`);
        setLikesCount((prevCount) => prevCount - 1);
        setLiked(false);

        localStorage.removeItem(`like-${postId}`);
      } else {
        // Usuario da "Me gusta"
        await axios.post(`http://localhost:3001/api/v1/likes/${postId}/${userId}`);
        setLikesCount((prevCount) => prevCount + 1);
        setLiked(true);

        localStorage.setItem(`like-${postId}`, 'true');
      }
    } catch (error) {
      console.error('Error al manejar el "Me gusta"', error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/comments/all/${postId}`);
        setCommentCount(response.data.total || 0);
        setComments(response.data.data || []);
      } catch (error) {
        console.error('Error al obtener los comentarios', error);
        setCommentCount(0);
        setComments([]);
      }
    };

    fetchComments();
  }, [postId]);

  const handleToggleComments = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="interaction-buttons">
      <button className={`heart-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
        <ion-icon name="heart"></ion-icon>
        {likesCount}
      </button>
      <button className="button" onClick={handleToggleComments}>
        <ion-icon name="chatbubble"></ion-icon>
        <span className="comment-count">{commentCount}</span> 
      </button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Comentarios</h3>
            <button onClick={closeModal}>Cerrar</button>
            <Comments postId={postId} userId={userId} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractionButtons;
