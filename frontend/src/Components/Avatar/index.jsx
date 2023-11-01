import './Avatar.css';

const Avatar = ({ imageUrl, style }) => {
    return (
        <div className={`avatar ${style === 'searchInput' ? 'style1 w-8 mr-3' : ''}`}>
            <img src={imageUrl} alt="Avatar" className={`avatar-image`} />
        </div>
    );
};

export default Avatar;
