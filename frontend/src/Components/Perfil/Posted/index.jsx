// import { FaHeart } from 'react-icons/fa'
import { FaRegHeart, FaComment, FaShareAlt } from 'react-icons/fa'
import './styles.css'

const Post = () => {
  return (
    <div className="profile-post">
      <h2 className="profile-post-title">Posts</h2>
      <hr className="profile-post-title-line" />
      <div className="profile-post-box">
        {postCard()}
        {postCard()}
        {postCard()}
      </div>
    </div>
  )
}
const postCard = () => {
  return (
    <div className="profile-post-card">
      <div className="profile-post-card-header">
        <div className="profile-post-card-header-photo">
          <img src="src/assets/img/profileImg.png" alt="profile-photo" />
        </div>
        <div className="profile-post-card-header-details">
          <p>name</p>
          <span>@username</span>
        </div>
        <div className="profile-post-card-header-date">
          <p>05 Oct 2023</p>
          <span>10:45</span>
        </div>
      </div>
      <div className="profile-post-card-body">{contentCard()}</div>
    </div>
  )
}

const contentCard = () => {
  return (
    <div className="profile-post-card-body-post">
      <div className="profile-post-content-card-info">
        La propiedad flex-wrap establecida a wrap en el elemento padre permitirá
        organizar los elementos de manera que salten a la siguiente línea si no
        cuenta con suficiente espacio horizontal.
      </div>
      <div className="profile-post-content-card-like">
        <span className="profile-post-icons">
          <FaComment style={{ width: 25, height: 25, color: '#fff' }} />
          100
        </span>
        <span className="profile-post-icons">
          <FaRegHeart style={{ width: 25, height: 25, color: '#fff' }} />
          15
        </span>
        <span className="profile-post-icons">
          <FaShareAlt style={{ width: 25, height: 25, color: '#fff' }} />
        </span>
      </div>
    </div>
  )
}

export default Post
