import './Avatar.css';

const Avatar = ({ imageUrl, style }) => {
    return (
        <div className={`avatar ${style === 'searchInput' ? 'w-8 h-8' : ''}`}>
            <img src={imageUrl} alt="Avatar" className={`avatar-image`} />
        </div>
    );
};

export default Avatar;
