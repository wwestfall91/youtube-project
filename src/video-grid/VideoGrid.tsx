import Thumbnail from "../thumbnail/Thumbnail";
import "./VideoGrid.css";

function VideoGrid() {
  return (
    <div className="video-grid-container">
      <div className="video-grid-item">
        <Thumbnail></Thumbnail>
      </div>
      <div className="video-grid-item">
        <Thumbnail></Thumbnail>
      </div>
      <div className="video-grid-item">
        <Thumbnail></Thumbnail>
      </div>
      <div className="video-grid-item">
        <Thumbnail></Thumbnail>
      </div>
      <div className="video-grid-item">
        <Thumbnail></Thumbnail>
      </div>
    </div>
  );
}

export default VideoGrid;
