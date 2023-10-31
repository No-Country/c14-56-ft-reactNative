import UserHeader from '@UserHeader';
import PostContent from '@PostContent';
import InteractionButtons from '@PostButtons';

import './Post.css'



const Post = ({ avatarUrl, userName, userHandle, postContent, postDate }) => {
    return (
        <div className="post">
            <UserHeader avatarUrl={avatarUrl} userId={userName} userHandle={userHandle} />
            <PostContent postContent={postContent} postDate={postDate} />
            <InteractionButtons />
        </div>
    );
};






export default Post;