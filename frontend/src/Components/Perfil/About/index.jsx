import './styles.css'
const About = ({ description }) => {
  return (
    <div>
      <h1 className="profile-about-title">Artista / Fotografo</h1>
      <div className="profile-about-box">
        <h4 className="profile-about-box-title">Sobre MI</h4>
        <hr className="profile-about-box-line" />
        <p className="profile-about-box-description">{description}</p>
      </div>
    </div>
  )
}

export default About
