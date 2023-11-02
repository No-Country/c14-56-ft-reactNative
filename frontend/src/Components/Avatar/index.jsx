import './Avatar.css';

const Avatar = ({ imageUrl, style, marginTop }) => {
    return (
        <div className={`avatar ${style === 'searchInput' ? 'style1 w-8 mr-3' : ''}`}>
            <div className={` rounded-full ${marginTop} `}>
                <img src={imageUrl} alt="Avatar" className={`avatar-image `} />
            </div>
        </div>

        // <div className="avatar">
        //     <div className="w-24 rounded-full">
        //         <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //     </div>
        // </div>

    );
};

export default Avatar;
