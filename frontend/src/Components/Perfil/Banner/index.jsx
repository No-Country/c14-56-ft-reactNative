import './styles.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className="profile-banner">
      <div className="profile-banner-container">
        <div className="profile-banner-photo">
          <img src="src/assets/img/profileImg.png" alt="profile-photo" />
        </div>
        <div className="profile-banner-details">
          <h4 className="profile-banner-details-title">
            Catherin Ipsum <span>@catherine12</span>
          </h4>
          <span className="profile-banner-details-description">
            Lorem ipsum dolor sit amet consectetur. Ut eget auctor sem fermentum
            aenean.
          </span>
          <div className="profile-banner-details-follows">
            <div className="profile-banner-details-follows-location">
              <span>
                <FaMapMarkerAlt
                  style={{ width: 25, height: 25, color: '#fff', margin: 0 }}
                />
              </span>
              <p>Australia</p>
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
          <div className="profile-banner-details-follows-button">
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
