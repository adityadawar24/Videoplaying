import React, { useState } from "react";
import "./videoPlayer.css";

const VideoPlayer = () => {
  const urls = [
    "https://player.vimeo.com/external/434905019.sd.mp4?s=534240d87801c5a05226fcc054db2bcb6623f5bd&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/536248970.sd.mp4?s=6fbac97a5137c9d7ffd23f754fab27b92aa963e9&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/448862150.sd.mp4?s=45d0ec2e4630cc04c9e4deb9b95e837120c69aae&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/199433617.sd.mp4?s=457abd2452a52548b8c02c503a91035ce8a713f0&profile_id=164&oauth2_token_id=57447761",
  ];

  const [currentVideo, setCurrentVideo] = useState(urls[0]);

  const handleCheckbox = (e) => {
    setCurrentVideo(e.target.value);
  };

  return (
    <div className="container">
      <div className="checkbox">
        <label>
          <input type="checkbox" value={urls[0]} checked={currentVideo === urls[0]} onChange={handleCheckbox} />
          Bird
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value={urls[1]} checked={currentVideo === urls[1]} onChange={handleCheckbox} />
          Tiger
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value={urls[2]} checked={currentVideo === urls[2]} onChange={handleCheckbox} />
          Dog
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox" value={urls[3]} checked={currentVideo === urls[3]} onChange={handleCheckbox} />
          Cat
        </label>
      </div>
      <div className="video-player">
        <iframe width="560" height="315" src={currentVideo}  allow="autoplay; encrypted-media" allowFullScreen title="Video Player" />
      </div>
    </div>
  );
};

export default VideoPlayer;
