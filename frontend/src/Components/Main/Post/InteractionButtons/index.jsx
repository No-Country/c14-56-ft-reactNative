import './InteractionButtons.css'

const InteractionButtons = ({ numLikes, numComments }) => {
    return (
        <div className="interaction-buttons">
            <button className="button">
                <i className="fa fa-thumbs-up"></i> {numLikes}
            </button>
            <button className="button">
                <i className="fa fa-comment"></i> {numComments}
            </button>
            <button className="button">
                <i className="fa fa-share"></i> Share
            </button>
            <button className="button">
                <i className="fa fa-share"></i> Save
            </button>
        </div>
    );
};

export default InteractionButtons