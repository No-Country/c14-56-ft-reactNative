import axios from 'axios';
import UserHeader from '@UserHeader';
import PostContent from '@PostContent';
import InteractionButtons from '@PostButtons';
import './Post.css';
import { useEffect, useState } from 'react';

const Post = ({ avatarUrl, userName, userHandle, postContent, postDate, postId, handleLikeClick, likesCount, liked }) => {
  const [posts, setPosts] = useState();
  const userData = JSON.parse(localStorage.getItem('userData'));

  const getPosts = () => {
    axios
      .get(`http://localhost:3001/api/v1/publications/all/${userData._id}?limit=10`)
      .then((res) => {
        setPosts(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post">
      <UserHeader avatarUrl={avatarUrl} userId={userName} userHandle={userHandle} />
      <PostContent postContent={postContent} postDate={postDate} />
      <InteractionButtons
        postId={postId}
        handleLikeClick={handleLikeClick}
        likesCount={likesCount}
        liked={liked}
      />
    </div>
  );
};

export default Post;
