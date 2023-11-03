import './PostContent.css';

const PostContent = ({ postContent, postDate }) => {
  const actualDate = new Date();
  const postDateTime = new Date(postDate);
  const timeDifference = actualDate - postDateTime;

  let timeAgo = '';

  if (timeDifference < 60000) {
    timeAgo = 'hace unos segundos';
  } else if (timeDifference < 3600000) {
    const minutes = Math.floor(timeDifference / 60000);
    timeAgo = `hace ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
  } else if (timeDifference < 86400000) {
    const hours = Math.floor(timeDifference / 3600000);
    timeAgo = `hace ${hours} hora${hours !== 1 ? 's' : ''}`;
  } else {
    const days = Math.floor(timeDifference / 86400000);
    timeAgo = `hace ${days} día${days !== 1 ? 's' : ''}`;
  }

  return (
    <div >
      <p className="post-date text-end italic ">{timeAgo}</p>
      <div className="post-content text-left rounded dark:bg-neutral-900">
        <p className="content text-ml dark:text-slate-200">{postContent}</p>
      </div>
    </div>
  );
};

export default PostContent;
