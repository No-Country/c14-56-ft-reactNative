import './PostContent.css'

const PostContent = ({ postContent, postDate }) => {
    return (
        <div>
            <p className="post-date"> Oct 20 4:20 {postDate}</p>
            <div className="post-content">
                <p className="content"> Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Odio, illo neque? Nostrum accusantium velit, 
                voluptatibus praesentium magnam quia. Rem pariatur perferendis est cum qui
                 quis aliquid at et provident aut?
                 {postContent}</p>

            </div>
        </div>

    );
};

export default PostContent