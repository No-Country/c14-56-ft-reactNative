import { FaRegHeart, FaComment, FaHeart, FaShareAlt } from 'react-icons/fa'
import UserHeader from '@UserHeader'
import PostContent from '@PostContent'

import './Post.css'

const Post = ({
  avatarUrl,
  userName,
  userHandle,
  postContent,
  postImage,
  postDate,
  postId,
  handleLikeClick,
  likesCount,
  liked,
}) => {
  return (
    <div className="profile-post-card">
      <UserHeader
        avatarUrl={avatarUrl}
        userId={userName}
        userHandle={userHandle}
      />
      <PostContent
        postContent={postContent}
        postDate={postDate}
        postImage={postImage?.path}
        postId={postId}
        handleLikeClick={handleLikeClick}
        likesCount={likesCount}
        liked={liked}
      />
    </div>
  )
}

const postCard = user => {
  const handleIconButton = key => {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
      setHovered(true)
    }

    const handleMouseLeave = () => {
      setHovered(false)
    }

    const styles = {
      color: hovered ? '#0897B4' : '#fff',
      cursor: 'pointer',
      width: 25,
      height: 25,
    }

    let value

    switch (key) {
      case 'heart':
        value = hovered ? (
          <FaHeart
            style={{
              color: '#D92525',
              cursor: 'pointer',
              width: 25,
              height: 25,
            }}
          />
        ) : (
          <FaRegHeart
            style={{
              color: '#fff',
              cursor: 'pointer',
              width: 25,
              height: 25,
            }}
          />
        )
        break
      case 'commet':
        value = <FaComment style={styles} />
        break
      case 'shared':
        value = <FaShareAlt style={styles} />
        break

      default:
        break
    }

    return (
      <button
        className="profile-post-icons"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {value}
        {key !== 'shared' ? 59 : ''}
      </button>
    )
  }

  return (
    <div className="profile-post-card">
      <div className="profile-post-card-header">
        <div className="profile-post-card-header-photo">
          <Avatar
            imageUrl={
              user ? user?.photoProfile?.path : 'src/assets/profileImg.png'
            }
          />
        </div>
        <div className="profile-post-card-header-details">
          <p>{user ? user?.name : 'Cargando...'}</p>
          <span>{user ? user?.username : 'Cargando...'}</span>
        </div>
        <div className="profile-post-card-header-date">
          <p>05 Oct 2023</p>
          <span>10:45</span>
        </div>
      </div>
      <div className="profile-post-card-body">
        <div className="profile-post-card-body-post">
          <div className="profile-post-content-card-info">
            La propiedad flex-wrap establecida a wrap en el elemento padre
            permitirá organizar los elementos de manera que salten a la
            siguiente línea si no cuenta con suficiente espacio horizontal.
          </div>
          <div className="profile-post-content-card-like">
            {handleIconButton('commet')}
            {handleIconButton('heart')}
            {handleIconButton('shared')}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
