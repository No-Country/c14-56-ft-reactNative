import './Post.css';

import UserHeader from '@UserHeader';
import PostContent from '@PostContent';
import InteractionButtons from '@PostButtons';

const Post = ({ avatarUrl, userName, userHandle, postContent, postImage, postDate, postId, handleLikeClick, likesCount, liked, user_id, commentsLength }) => {
    
  return (
    //profile-post-card sacado del develop
    <div className="post profile-post-card dark:bg-neutral-800 dark:border-neutral-700">
      <UserHeader avatarUrl={avatarUrl} userId={userName} userHandle={userHandle} />
      <PostContent postContent={postContent} postDate={postDate} postImage={postImage?.path}/>
      <InteractionButtons
        postId={postId}
        handleLikeClick={handleLikeClick}
        likesCount={likesCount}
        liked={liked}
        user_id={user_id}    
        commentsLength={commentsLength} 
      />
    </div>
  )
}
export default Post
