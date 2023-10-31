import './Avatar.css';

const Avatar = ({ imageUrl, style }) => {
    return (
        <div className={`avatar`}>
            <img src={imageUrl} alt="Avatar" className={`avatar-image`} />
        </div>
    );
};

export default Avatar;
