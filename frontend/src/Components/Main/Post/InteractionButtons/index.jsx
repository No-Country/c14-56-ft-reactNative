import './InteractionButtons.css'

const InteractionButtons = ({ numLikes, numComments }) => {
    return (
        <div className="interaction-buttons">
            <button className="button">
            <ion-icon name="heart"></ion-icon>{numLikes}
            </button>
            <button className="button">
            <ion-icon name="chatbubble"></ion-icon> {numComments}
            </button>
            <button className="button">
            <ion-icon name="share-social"></ion-icon> 
            </button>
            <button className="button">
            <ion-icon name="bookmark"></ion-icon>
            </button>
        </div>
    );
};

export default InteractionButtons