import React, { useState, useEffect, useRef } from 'react'
import Comments from '@Comments'
import { useCookies } from 'react-cookie'
import './InteractionButtons.css'
import heartButton from '../../../../assets/icons/heart_icon.png'
import heartButtonRed from '../../../../assets/icons/heart_icon_red.png'
import messageButton from '../../../../assets/icons/message-icon.png'
import axios from 'axios'

const InteractionButtons = ({ postId, user_id }) => {
  const { userId } = useCookies(['userId'])[0]

  const [likesCount, setLikesCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [likeId, setLikeId] = useState(undefined)

  const [commentsLength, setCommentsLength] = useState(0)

  useEffect(() => {
    try {
      axios
        .get(`https://linkup-5h1y.onrender.com/api/v1/comments/all/${postId}`)
        .then(res => {
          const value = res.data.data
          setCommentsLength(value.length)
        })
    } catch (error) {
      console.log(error)
    }
  }, [postId])

  useEffect(() => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/likes/${postId}/${userId}`)
      .then(res => {
        const likeData = res.data.data.find(like => like.userId === userId)
        setLikesCount(res.data.data.length)
        setIsLiked(!!likeData)
        setLikeId(likeData ? likeData._id : undefined)
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

  const mi_modal = useRef()

  const handleOpenModal = () => {
    if (mi_modal.current) {
      mi_modal.current.showModal()
    }
  }

  return (
    <div className="flex bg-pink-100 rounded-b-lg py-2 justify-between dark:bg-neutral-800 ">
      <div
        className={`focus:outline-none ${isLiked ? 'text-red-600' : 'text-black dark:text-slate-200'}`}
      >
        <img
          src={isLiked ? heartButtonRed : heartButton}
          alt=""
          className="w-9 cursor-pointer transform hover:scale-110"
          onClick={handleLike}
        />
        <span className="text-lg">{likesCount} Me gusta</span>
      </div>
      <div
        className=" dark:text-slate-200 focus:outline-none"
      >
        <img
          src={messageButton}
          alt="" className="w-6 cursor-pointer transform hover:scale-110 pt-1 pb-2"
          onClick={() => handleOpenModal()} />
        <span className="comment-count text-lg">{commentsLength}</span>
      </div>
      <Comments
        postId={postId}
        mi_modal={mi_modal}
        user_id={user_id} />
    </div>
  )
}
export default InteractionButtons
