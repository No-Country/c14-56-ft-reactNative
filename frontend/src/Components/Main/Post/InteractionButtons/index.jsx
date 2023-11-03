import React, { useState, useEffect, useRef } from 'react';
import Comments from '@Comments';
import { useCookies } from 'react-cookie';
import './InteractionButtons.css'

import axios from 'axios';

const InteractionButtons = ({ postId, user_id }) => {
  const { userId } = useCookies(['userId'])[0];

  const [likesCount, setLikesCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [likeId, setLikeId] = useState(undefined)

  const [commentsLength, setCommentsLength] = useState(0)

  useEffect(() => {
    try {
      axios.get(`http://localhost:3001/api/v1/comments/all/${postId}`)
        .then((res) => {
          const value = res.data.data
          setCommentsLength(value.length)

        })
    } catch (error) {
      console.log(error);
    }
  }, [postId])
  

  useEffect(() => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/likes/${postId}/${userId}`)
      .then(res => {
        const likeData = res?.data?.data?.find(like => like?.userId === userId)
        setLikesCount(res?.data?.data?.length)
        setIsLiked(!!likeData)
        setLikeId(likeData ? likeData?._id : undefined)
      })
      .catch(error => {
        console.log(error)
      })
  }, [postId, userId])

  const handleLike = async () => {
    if (isLiked) {
      try {
        await axios.delete(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${likeId}`
        )
        setLikesCount(likesCount - 1)
        setIsLiked(false)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await axios.post(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${postId}/${userId}`
        )
        setLikesCount(likesCount + 1)
        setIsLiked(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const mi_modal = useRef();

  const handleOpenModal = () => {
    if (mi_modal.current) {
      mi_modal.current.showModal();
    }
  };

  return (
   // <div className="flex bg-pink-100 rounded-b-lg py-2 justify-between dark:bg-neutral-800 ">
     // <button
      //  className={`heart-button relative bg-transparent cursor-pointer ${
      //    isLiked ? 'text-red-600 liked' : 'text-black dark:text-slate-200'
     //   } `}
     //   onClick={handleLike}
    //  >
     //   <ion-icon name="heart" class="text-2xl"></ion-icon>
     //   {likesCount} <span className="text-lg">Me gusta</span>
    
    //

    <div className="interaction-buttons">
      <button
        className={`heart-button ${isLiked ? 'liked' : ''}`}
        onClick={handleLike}
      >
        <ion-icon name="heart"></ion-icon>
        {likesCount} <span>Me gusta</span>
        
        
      </button>
      <button
        className="button relative bg-transparent cursor-pointer chatbubble-button dark:text-slate-200"
        onClick={() => handleOpenModal()}
      >
        <ion-icon name="chatbubble" class="text-2xl"></ion-icon>
        <span className="comment-count text-lg">{commentsLength}</span>
      </button>
      <Comments postId={postId} mi_modal={mi_modal} user_id={user_id} />
    </div>
  )

};
export default InteractionButtons;
