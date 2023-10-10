import React from 'react';
import './Avatar.css';

const Avatar = ({ imageUrl }) => {
    return (
        <div className="avatar">
            <img src={imageUrl} alt="Avatar" className="avatar-image" />
        </div>
    );
};

export default Avatar;
