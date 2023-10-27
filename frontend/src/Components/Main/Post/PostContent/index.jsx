import './PostContent.css'

const PostContent = ({ postContent, postDate }) => {
    
    return (
        <div>
            <p className="post-date"> Oct 20 4:20 {postDate}</p>
            <div className="post-content">
                <p className="content"> 
                 {postContent}</p>

            </div>
        </div>

    );
};

export default PostContent