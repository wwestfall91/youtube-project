import "./Thumbnail.css";

function Thumbnail() {
  return (
    <div className="thumbnail-container">
      <img
        className="thumbnail-image"
        src="https://i.ytimg.com/vi/3zeHBreluF8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxj8WBlrzObI-XmD4bhjf8vWnbtQ"
      ></img>
      <div className="details-container">
        <div className="channel-icon">O</div>
        <div className="video-details">
          <div className="video-title">
            a peaceful rainy day - calm your anxiety, relaxing music
          </div>
          <div className="video-subtitle">Aesthetic Lofi</div>
          <div className="video-subtitle">2M views - Streamed 1 year ago</div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
