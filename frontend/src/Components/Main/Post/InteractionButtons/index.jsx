import axios from 'axios';
import { useState } from 'react';
import './InteractionButtons.css';

const InteractionButtons = ({ postId, isLiked, likesCount, handleUpdateLikes, userId }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    if (postId && userId) {
      axios
        .get(`http://localhost:3001/api/v1/likes/${postId}/${userId}`)
        .then((response) => {
          if (response.data.isLiked) {
            if (liked) {
              // Si el usuario ya dio like, debes restar 1
              handleUpdateLikes(postId, -1);
            } else {
              // Si el usuario no ha dado like, debes sumar 1
              handleUpdateLikes(postId, 1);
            }
            setLiked(!liked);
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('postId o userId no está definido en InteractionButtons');
    }
  };

  return (
    <div className="interaction-buttons">
      <button onClick={handleLike} className={liked ? 'liked' : ''}>
        {liked ? 'Unlike' : 'Like'} <ion-icon name="heart"></ion-icon>
      </button>
      <div className="likes-count">{likesCount || 0}</div>
      <button className="button">
        <ion-icon name="chatbubble"></ion-icon>
      </button>
    </div>
  );
};

export default InteractionButtons;
