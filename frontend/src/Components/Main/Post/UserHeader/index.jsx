import Avatar from '@Avatar';
import './UserHeader.css'

const UserHeader = ({ avatarUrl, userName, userHandle }) => {

    return (
        <div className="user-header">
            <Avatar imageUrl={avatarUrl} />
            <div>
                <p className="user-name">{userName}</p>
                <p className="user-handle">@{userHandle}</p>

            </div>
        </div>
    );
};

export default UserHeader