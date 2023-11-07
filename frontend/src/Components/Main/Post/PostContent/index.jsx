import './PostContent.css'

const PostContent = ({
  postContent,
  postDate,
  postImage,
}) => {
  const actualDate = new Date()
  const postDateTime = new Date(postDate)
  const timeDifference = actualDate - postDateTime

  let timeAgo = ''
  
  if (timeDifference < 60000) {
    // Menos de un minuto
    timeAgo = 'hace unos segundos'
  } else if (timeDifference < 3600000) {
    // Menos de una hora
    const minutes = Math.floor(timeDifference / 60000)
    timeAgo = `hace ${minutes} minuto${minutes !== 1 ? 's' : ''}`
  } else if (timeDifference < 86400000) {
    // Menos de un día
    const hours = Math.floor(timeDifference / 3600000)
    timeAgo = `hace ${hours} hora${hours !== 1 ? 's' : ''}`
  } else {
    const days = Math.floor(timeDifference / 86400000)
    timeAgo = `hace ${days} día${days !== 1 ? 's' : ''}`
  }

  return (
    <div className="">
      <p className="post-date text-end italic">{timeAgo}</p>
      <div className="post-content text-left rounded dark:bg-neutral-900">
        <div className="content text-ml dark:text-slate-200">{postContent}</div>
        {postImage !== 'none' ? <img src={postImage} alt="post-image" className='mt-5 rounded'/> : null}
      </div>
    </div>
  )
}

export default PostContent
