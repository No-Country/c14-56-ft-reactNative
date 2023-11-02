import './Post.css';

import UserHeader from '@UserHeader';
import PostContent from '@PostContent';
import InteractionButtons from '@PostButtons';

const Post = ({ avatarUrl, userName, userHandle, postContent, postDate, postId, handleLikeClick, likesCount, liked, user_id, commentsLength }) => {
    
  return (
    <div className="post">
      <UserHeader avatarUrl={avatarUrl} userId={userName} userHandle={userHandle} />
      <PostContent postContent={postContent} postDate={postDate} />
      <InteractionButtons
        postId={postId}
        handleLikeClick={handleLikeClick}
        likesCount={likesCount}
        liked={liked}
        user_id={user_id}    
        commentsLength={commentsLength} 
      />
    </div>
  );
};

export default Post;
