import Avatar from '../../../Avatar/Avatar';
import './UserHeader.css'

const UserHeader = ({ avatarUrl, userName, userHandle }) => {
    return (
        <div className="user-header">
            <Avatar imageUrl={avatarUrl} />
            <div>
                <p className="user-name">Nombre{userName}</p>
                <p className="user-handle">@usario{userHandle}</p>

            </div>
        </div>
    );
};

export default UserHeader