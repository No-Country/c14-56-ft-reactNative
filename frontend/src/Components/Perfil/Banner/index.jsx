import './styles.css'
import Avatar from '@Avatar'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Banner = ({ user }) => {
  const userData = JSON.parse(localStorage.getItem('userData'))

  const followButton = () => {
    if (userData._id !== user?._id) {
      return (
        <div className="profile-banner-details-follows-button">
          <button>Follow</button>
        </div>
      )
    }
    return null
  }
  return (
    <div className="profile-banner">
      <div className="profile-banner-container">
        <div className="profile-banner-photo">
          <Avatar
            imageUrl={
              user ? user?.photoProfile?.path : 'src/assets/profileImg.png'
            }
          />
        </div>
        <div className="profile-banner-details">
          <h4 className="profile-banner-details-title">
            {user ? user?.name : 'Cargando...'}{' '}
            <span>{user ? `@${user?.username}` : 'Cargando...'}</span>
          </h4>
          <span className="profile-banner-details-description">
            {user?.description}
          </span>
          <div className="profile-banner-details-follows">
            <div className="profile-banner-details-follows-location">
              <span>
                <FaMapMarkerAlt
                  style={{ width: 25, height: 25, color: '#fff', margin: 0 }}
                />
              </span>
              <p>{user ? user?.country : 'Cargando...'}</p>
            </div>
            <div className="profile-banner-details-follows-p">
              <p>
                15K <span>Seguidores</span>
              </p>
              <p>
                15K <span>Seguidos</span>
              </p>
              <p>
                30 <span>Publicaciones</span>
              </p>
            </div>
          </div>
          {followButton()}
        </div>
      </div>
    </div>
  )
}

export default Banner
