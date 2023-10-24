import React from 'react';
import UserHeader from './UserHeader/UserHeader';
import PostContent from './PostContent/PostContent';
import InteractionButtons from './InteractionButtons/InteractionButtons';

import './Post.css'



const Post = ({ avatarUrl, userName, userHandle, postContent, postDate }) => {
    return (
        <div className="post">
            <UserHeader avatarUrl={avatarUrl} userName={userName} userHandle={userHandle} />
            <PostContent postContent={postContent} postDate={postDate} />
            <InteractionButtons />
        </div>
    );
};






export default Post;