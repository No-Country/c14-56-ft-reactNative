import React, { useState, useEffect } from 'react';
import './Comments.css'


import Avatar from '@Avatar'
import axios from 'axios';

const Comments = ({ postId, mi_modal, user_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const userId = user_id
  
  const [completeComments, setCompleteComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://linkup-5h1y.onrender.com/api/v1/comments/all/${postId}`
        )
        setComments(response.data.data || [])
      } catch (error) {
        console.error('Error al obtener los comentarios', error)
        setComments([])
      }
    }

    fetchComments()
  }, [postId])
  
  console.log(userId)
  useEffect(() => {
    const fetchCompleteComments = async () => {
      try {
        const completeCommentsArray = [];
        for (let comment of comments) {
          const response = await axios.get(`https://linkup-5h1y.onrender.com/api/v1/users/${userId}`);
          // console.log(response.data.data)
          const value = response.data.data;
          completeCommentsArray.push({
            text: comment.text,
            photoProfile: value.photoProfile.path,
            userName: value.username,
            name: value.name,
            postId: postId
          });
          
        }
        setCompleteComments(completeCommentsArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompleteComments();
  }, [comments, userId]);

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `https://linkup-5h1y.onrender.com/api/v1/comments/${postId}`,
        {
          text: newComment,
          userId: userId,
        }
      )

      setComments([...comments, response.data])
      setNewComment('')

      // onClose();
    } catch (error) {
      console.error('Error al agregar un comentario', error)
    }
  }

  return (
    <dialog className="modal fixed z-10 inset-0 overflow-y-auto" style={{ fontFamily: 'initial' }} ref={mi_modal}>
      <div className="modal-content bg-white h-5/6 mx-auto my-8 border border-gray-300 rounded-lg p-4 w-4/5 dark:bg-neutral-900">
        <div className="w-full flex ">
          <h3 className="text-2xl font-semibold mb-4 dark:text-slate-200">Comentarios</h3>
          <ion-icon
            name="close-outline"
            className="closeIcon text-2xl absolute top-2 right-10"
            style={{ color: 'black' }}
          ></ion-icon>
        </div>

        <div className="comments-list mt-4 h-80 overflow-x-auto bg-slate-100 rounded-3xl dark:bg-neutral-800">
          {completeComments ? (
            <div>
              {Object.values(completeComments).map((element, index) => (
                <div key={index} className="w-5/6 my-2 flex flex-col justify-start">
                  <div className='flex'>
                    <Avatar imageUrl={element.photoProfile} marginTop={'w-14'} />
                    <div className="text-left my-2 ">
                      <p className='font-bold dark:text-slate-200'>{element.name}</p>
                      <p className="text-slate-400">@{element.userName}</p>
                    </div>
                  </div>
                  <div className="bg-sky-100 h-16 rounded-xl dark:bg-neutral-600">
                    <p className="text-left ml-5 my-2 dark:text-slate-200">{element.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : ''}
        </div>

        <div className="mt-4 flex">
          <div className="mb-4">
            <textarea
              placeholder="Agrega un comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full h-16 border rounded p-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-slate-200"
            />
          </div>
          <button
            className=" btn btn-info btn-md bg-blue-500 text-white  mt-2 rounded hover-bg-blue-700 w-1/6 mx-4 dark:bg-blue-800 dark:hover:bg-blue-700"
            onClick={handleAddComment}
          >
            Enviar
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Comments
